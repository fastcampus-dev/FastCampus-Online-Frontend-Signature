// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRIQfz9cbtyLPRnSnnhOKN6IePyJtoiZg",
  authDomain: "react-disney-plus-app.firebaseapp.com",
  projectId: "react-disney-plus-app",
  storageBucket: "react-disney-plus-app.appspot.com",
  messagingSenderId: "17555251393",
  appId: "1:17555251393:web:672c0357240c85d4b9f440"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;