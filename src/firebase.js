import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC3m6Z7nYorbNT0oaC7TI9jpdKkp1wsbM0",
  authDomain: "clone-c9224.firebaseapp.com",
  projectId: "clone-c9224",
  storageBucket: "clone-c9224.appspot.com",
  messagingSenderId: "1011872250390",
  appId: "1:1011872250390:web:5a60d6ad4a6b0f8428d337",
  measurementId: "G-9CM8Y95DLX",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
