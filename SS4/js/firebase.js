// Import the functions you need from the SDKs you need
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAszacEVGgteRzmRXYU1iDF1ZuyZVXvcFw",
  authDomain: "nps-jsi18-hb.firebaseapp.com",
  projectId: "nps-jsi18-hb",
  storageBucket: "nps-jsi18-hb.appspot.com",
  messagingSenderId: "81136092064",
  appId: "1:81136092064:web:48425298c485c90c609ac5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);