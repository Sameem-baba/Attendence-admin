// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfEG5z4zEYbILQ15f3Y_filShjcG8yqm4",
  authDomain: "attendence-management-7f4ec.firebaseapp.com",
  projectId: "attendence-management-7f4ec",
  storageBucket: "attendence-management-7f4ec.appspot.com",
  messagingSenderId: "728762791203",
  appId: "1:728762791203:web:ad9b1dbe3fe0b2e25b4896"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();
const auth = getAuth();

export { db, auth, app };