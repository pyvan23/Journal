// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWjFWwFczdkvMbtj_V64B2nRxNV-kFzFk",
  authDomain: "journal-app-9d29f.firebaseapp.com",
  projectId: "journal-app-9d29f",
  storageBucket: "journal-app-9d29f.appspot.com",
  messagingSenderId: "1043338636300",
  appId: "1:1043338636300:web:4b02fc32d33da3728fd229",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
