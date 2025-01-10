// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtKVBH751Z1isTnD3N-r500_rZW8IdYck",
  authDomain: "mr-eats-d9ee2.firebaseapp.com",
  projectId: "mr-eats-d9ee2",
  storageBucket: "mr-eats-d9ee2.firebasestorage.app",
  messagingSenderId: "898619847143",
  appId: "1:898619847143:web:80612d5f0de03ea9f5cd42",
  measurementId: "G-9TNPRLSLQV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
