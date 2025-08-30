// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyC-OF47N9JPfWduII0gxR8x2ym2fRde9lU",
  authDomain: "aurorix-99ca5.firebaseapp.com",
  databaseURL: "https://aurorix-99ca5-default-rtdb.firebaseio.com",
  projectId: "aurorix-99ca5",
  storageBucket: "aurorix-99ca5.firebasestorage.app",
  messagingSenderId: "809525055336",
  appId: "1:809525055336:web:bd9c0f7a55054ab94dd0dd",
  measurementId: "G-E8Q7WDHXS4"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc, getDocs, deleteDoc, doc };
