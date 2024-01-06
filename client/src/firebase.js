// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-d39ad.firebaseapp.com",
  projectId: "mern-auth-d39ad",
  storageBucket: "mern-auth-d39ad.appspot.com",
  messagingSenderId: "142048082082",
  appId: "1:142048082082:web:92013448f1699f99637ffb"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);