// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAejQAH2XMC8R7hTaTakluNNzhV9hd2t2s",
  authDomain: "app-b784d.firebaseapp.com",
  projectId: "app-b784d",
  storageBucket: "app-b784d.appspot.com",
  messagingSenderId: "461101599355",
  appId: "1:461101599355:web:2b32997942d2f4e0b2b0de",
  measurementId: "G-5J6WN5PTRG",
};

// Inititaloizing the APp
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
