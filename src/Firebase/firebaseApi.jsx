// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCllB1AExMwsOtniJ9iY5q6s27hPDvTXu8",
  authDomain: "goquest-47c9a.firebaseapp.com",
  projectId: "goquest-47c9a",
  storageBucket: "goquest-47c9a.firebasestorage.app",
  messagingSenderId: "583000744790",
  appId: "1:583000744790:web:46175b66393ea796c1ecf7",
  measurementId: "G-JN1005DCB8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();

