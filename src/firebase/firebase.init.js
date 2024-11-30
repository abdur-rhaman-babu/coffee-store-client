// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqf7ey_-V_OcMAy3SP0R17N0cK7qde3rU",
  authDomain: "coffee-store-9a4fc.firebaseapp.com",
  projectId: "coffee-store-9a4fc",
  storageBucket: "coffee-store-9a4fc.firebasestorage.app",
  messagingSenderId: "942955120301",
  appId: "1:942955120301:web:3a9c228707e475960ca824"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)