// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDz0OFBZDNaY0-UsqZtQWsZzOeagNLX5jw",
  authDomain: "login-node-a013c.firebaseapp.com",
  projectId: "login-node-a013c",
  storageBucket: "login-node-a013c.appspot.com",
  messagingSenderId: "998346912584",
  appId: "1:998346912584:web:3a185be719f7c2fc44f97d",
  measurementId: "G-YRZ4GRMFW7"
};

// Initialize Firebase
const appfirebase = initializeApp(firebaseConfig);
const storage = getStorage(appfirebase); // Para subir imágenes a Firebase Storage
const auth = getAuth(appfirebase); // Para autenticación con Firebase Auth

export { appfirebase, storage, auth };
