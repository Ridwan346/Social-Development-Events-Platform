// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCB71jHSQxF77lkPMn98J63nmdD0hPhl2E",
  authDomain: "event-magement-platform.firebaseapp.com",
  projectId: "event-magement-platform",
  storageBucket: "event-magement-platform.firebasestorage.app",
  messagingSenderId: "779908892716",
  appId: "1:779908892716:web:34108d5d3f8fcfebbaa989"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);