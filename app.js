// Aapka Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyBi-8ysRuzct9k3NlFS-UKDyFtapWgdCOw",
  authDomain: "my-notes-app-a2e25.firebaseapp.com",
  // IMPORTANT: Maine aapke liye databaseURL add kar diya hai, iski zaroorat hoti hai.
  databaseURL: "https://my-notes-app-a2e25-default-rtdb.firebaseio.com",
  projectId: "my-notes-app-a2e25",
  storageBucket: "my-notes-app-a2e25.appspot.com",
  messagingSenderId: "548334017786",
  appId: "1:548334017786:web:a8ef98b575dc3909407d43"
};

// Firebase ko shuru karein
firebase.initializeApp(firebaseConfig);

// Database ka reference lein
const database = firebase.database();

// 'notes' path ka reference lein
const notesRef = database.ref('notes');

// HTML list element ko pakdein
const notesList = document.getElementById('notes-list');

// REAL-TIME LISTENER: Jab bhi database mein data badlega, yeh code chalega
notesRef.on('value', (snapshot) => {
    // Purani list ko saaf karo
    notesList.innerHTML = '';

    const data = snapshot.val();
    
    // Agar data hai to
    if (data) {
        // Har ek note ke liye
        for (const key in data) {
            const note = data[key];
            const listItem = document.createElement('li');
            listItem.textContent = note.text; // note ka text list item mein daalo
            notesList.appendChild(listItem); // Naya item page par dikhao
        }
    } else {
        // Agar koi data nahi hai to
        notesList.innerHTML = '<li>No notes yet. Add one in Firebase!</li>';
    }
});
