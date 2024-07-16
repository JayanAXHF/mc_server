// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3QD5fgtztta3CZj7_Ka9JqwOsbUKxNFE",
  authDomain: "mc-server-website-backend.firebaseapp.com",
  databaseURL:
    "https://mc-server-website-backend-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "mc-server-website-backend",
  storageBucket: "mc-server-website-backend.appspot.com",
  messagingSenderId: "1049850861164",
  appId: "1:1049850861164:web:7f45c7d62eced3c57e6a49",
  measurementId: "G-5JH1SFCXRV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
