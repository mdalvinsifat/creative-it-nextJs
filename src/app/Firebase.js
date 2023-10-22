
import { initializeApp } from "firebase/app";
import {getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCDILkzMm68VY__jElpseOJyHko982cQ8E",
  authDomain: "it-project-f2fb1.firebaseapp.com",
  projectId: "it-project-f2fb1",
  storageBucket: "it-project-f2fb1.appspot.com",
  messagingSenderId: "212141076993",
  appId: "1:212141076993:web:96a1196ca1b5e9ca648600",
  measurementId: "G-09TXG0WMW2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;