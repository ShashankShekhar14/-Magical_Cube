// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-6f83b.firebaseapp.com",
  projectId: "mern-estate-6f83b",
  storageBucket: "mern-estate-6f83b.appspot.com",
  messagingSenderId: "657633690762",
  appId: "1:657633690762:web:7a59ea06624517e20d1973"
};
//console.log(import.meta.env.VITE_FIREBASE_API_KEY) // "123"
//console.log(import.meta.env.DB_PASSWORD) // undefined
// Initialize Firebase
export const app = initializeApp(firebaseConfig);