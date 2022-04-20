import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBbsDRL4a-2Ruqdw4tRYRHT2SpGze3Nn6c",
  authDomain: "chat-app-b34db.firebaseapp.com",
  projectId: "chat-app-b34db",
  storageBucket: "chat-app-b34db.appspot.com",
  messagingSenderId: "958588000762",
  appId: "1:958588000762:web:174c6a37a0ae1ccb742c43",
  measurementId: "G-W9690J5JY6",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
firebase.initializeApp(firebaseConfig);
firebase.analytics();
const auth = firebase.auth();
const db = firebase.firestore();
auth.useEmulator("http://localhost:9099");
if (window.location.hostname === "localhost") {
  db.useEmulator("localhost", "8080");
}

export { auth, db };
export default firebase;
