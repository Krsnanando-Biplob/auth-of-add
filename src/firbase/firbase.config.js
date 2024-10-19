// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1jbcfVRaRzA9Vjh0Lygz5KrhMuRJcWYE",
  authDomain: "auth-of-add.firebaseapp.com",
  projectId: "auth-of-add",
  storageBucket: "auth-of-add.appspot.com",
  messagingSenderId: "728133964591",
  appId: "1:728133964591:web:e3cb81cecec590ce0887da"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;