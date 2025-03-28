// src/firebase-config.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDG3IE-Np6dRNaRzu7FGWMEzRWwjyOvM2Y",
  authDomain: "public-employment-centre.firebaseapp.com",
  projectId: "public-employment-centre",
  storageBucket: "public-employment-centre.appspot.com",
  messagingSenderId: "293612005111",
  appId: "1:293612005111:web:6f43098f1738cbb71515f2",
  measurementId: "G-TD8NZYR523"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
