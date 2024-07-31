// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDW1LIZSe6rRiVpql2VBODrdhemqpQ5emU",
  authDomain: "netflixgpt-5c60b.firebaseapp.com",
  projectId: "netflixgpt-5c60b",
  storageBucket: "netflixgpt-5c60b.appspot.com",
  messagingSenderId: "913285482990",
  appId: "1:913285482990:web:5d1da80e1d1a83e3ae26ff",
  measurementId: "G-TD6JQKWS39"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();