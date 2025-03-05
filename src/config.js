// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2rrz2nGcMOpFTIfTcMwcXcwt4I3onJbU",
  authDomain: "urbinasandboxlive.firebaseapp.com",
  projectId: "urbinasandboxlive",
  storageBucket: "urbinasandboxlive.firebasestorage.app",
  messagingSenderId: "52480063777",
  appId: "1:52480063777:web:2f5d5d5cd91a1a3643e660",
  measurementId: "G-ZDQS0W7DYH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;