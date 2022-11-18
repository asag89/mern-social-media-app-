// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
//will be fixed later
const firebaseConfig = {
    apiKey: "AIzaSyCLGJ1p90DLVN3NK-j05Q8-3PKcdH6u_U4",
    authDomain: "social-media-v2-19789.firebaseapp.com",
    projectId: "social-media-v2-19789",
    storageBucket: "social-media-v2-19789.appspot.com",
    messagingSenderId: "617952419658",
    appId: "1:617952419658:web:b02b2879d694c06c2c6bb3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)