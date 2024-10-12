import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAyTiAi4I3tTJ8cyyeXuBIso9CZ3WrLGGI",
  authDomain: "minicorereplica.firebaseapp.com",
  projectId: "minicorereplica",
  storageBucket: "minicorereplica.appspot.com",
  messagingSenderId: "86707232463",
  appId: "1:86707232463:web:bf35cb38b774d4d10761ba",
  measurementId: "G-JK54NSP7HG"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
