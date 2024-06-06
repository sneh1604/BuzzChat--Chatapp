import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAuZmiHS0Yfg2zj-GcQ4g5Uhkc-bNpXbTw",
    authDomain: "chatapp-c6488.firebaseapp.com",
    projectId: "chatapp-c6488",
    storageBucket: "chatapp-c6488.appspot.com",
    messagingSenderId: "861053571055",
    appId: "1:861053571055:web:8887c51db3a60aac10301a",
    measurementId: "G-CPZ6117318"
  };
  
  const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
