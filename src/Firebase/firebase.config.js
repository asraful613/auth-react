// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvHAyKj5lq_XTZ8rhGr1d95cLDk8-nPIE",
  authDomain: "auth-react-6bbb2.firebaseapp.com",
  projectId: "auth-react-6bbb2",
  storageBucket: "auth-react-6bbb2.appspot.com",
  messagingSenderId: "681542122397",
  appId: "1:681542122397:web:e67ca93c861c84b8c0cd74"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
