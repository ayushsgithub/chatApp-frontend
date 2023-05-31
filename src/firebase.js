// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTagHundlIS4hmk4y2N4okJFBPomnuyo4",
  authDomain: "whatsapp-mern-aa965.firebaseapp.com",
  projectId: "whatsapp-mern-aa965",
  storageBucket: "whatsapp-mern-aa965.appspot.com",
  messagingSenderId: "487290222706",
  appId: "1:487290222706:web:75e96f05a8693e56f72aeb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
