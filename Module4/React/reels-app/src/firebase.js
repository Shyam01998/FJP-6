// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import  {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWk--fmdcMTa7DXW9ZgiqwsesMpqbTK7s",
  authDomain: "reels-project-4426a.firebaseapp.com",
  projectId: "reels-project-4426a",
  storageBucket: "reels-project-4426a.appspot.com",
  messagingSenderId: "610510418412",
  appId: "1:610510418412:web:1b47c01d2c3d403f7210c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export let auth = getAuth(app);
export default auth;