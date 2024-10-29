// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASJgfk_qjIq66hYf2cGtEstXloHcsSGjc",
  authDomain: "blog-app-8fe40.firebaseapp.com",
  projectId: "blog-app-8fe40",
  storageBucket: "blog-app-8fe40.appspot.com",
  messagingSenderId: "428820828693",
  appId: "1:428820828693:web:062ada3338100a0e3c741c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);