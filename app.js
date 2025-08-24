// 1. YAHAN APNA FIREBASE CONFIG PASTE KAREIN
const firebaseConfig = {
  apiKey: "YOUR_API_KEY", // Inko apne actual config se badalna hai
  authDomain: "your-project-id.firebaseapp.com",
  databaseURL: "https://your-project-id.firebaseio.com",
  projectId: "your-project-id",
  storageBucket: "your-project-id.appspot.com",
  messagingSenderId: "...",
  appId: "..."
};

// 2. Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const notesRef = database.ref('notes');
const notesList = document.getElementById('notes-list');

// REAL-TIME LISTENER
notesRef.on('value', (snapshot) => {
    notesList.innerHTML = '';
    const data = snapshot.val();
    if (data) {
        for (const key in data) {
            const note = data[key];
            const listItem = document.createElement('li');
            listItem.textContent = note.text;
            notesList.appendChild(listItem);
        }
    } else {
        notesList.innerHTML = '<li>No notes yet. Add one in Firebase!</li>';
    }
});
