// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBlQ7seanh32-jKXWgmQVI_CZ-pKPzsjik",
  authDomain: "streaming-cinema.firebaseapp.com",
  projectId: "streaming-cinema",
  storageBucket: "streaming-cinema.firebasestorage.app",
  messagingSenderId: "1078943256454",
  appId: "1:1078943256454:web:a4c956c508e37b4b37e607",
  measurementId: "G-BPDBVX3JF3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);