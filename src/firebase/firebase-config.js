import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB08rvDNVv0KJWjjrtt8Lc8vcFxyKzO5xg",
    // authDomain: "paul-binyan.firebaseapp.com",
    authDomain: "paul-binyan.web.app",
    projectId: "paul-binyan",
    storageBucket: "paul-binyan.appspot.com",
    messagingSenderId: "338579408324",
    appId: "1:338579408324:web:1bdc8da3fffde0fa081091",
    measurementId: "G-Q5TM4E5DFR"
  };

  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
  export const db = getFirestore(app);