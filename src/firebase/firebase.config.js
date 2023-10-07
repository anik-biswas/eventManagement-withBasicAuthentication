// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCELKDgzOECtOmkSthxNS6WY1AKXXLRFJ4",
  authDomain: "eventmanagement-7fc4a.firebaseapp.com",
  projectId: "eventmanagement-7fc4a",
  storageBucket: "eventmanagement-7fc4a.appspot.com",
  messagingSenderId: "152425365666",
  appId: "1:152425365666:web:20dd4bac0936295fc897fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;