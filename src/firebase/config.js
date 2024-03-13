// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBugT4Ok7OMub3Ks4lHEcuXVJL2wPQqDCc",
    authDomain: "ecommerce-nextjs-5d4f1.firebaseapp.com",
    projectId: "ecommerce-nextjs-5d4f1",
    storageBucket: "ecommerce-nextjs-5d4f1.appspot.com",
    messagingSenderId: "958467757781",
    appId: "1:958467757781:web:f19b710e508afcb658745c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const storage = getStorage(app)
export const auth = getAuth(app)