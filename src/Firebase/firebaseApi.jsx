import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";

// Your Firebase configuration
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
export const db = getFirestore(app);

