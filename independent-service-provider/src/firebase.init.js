// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_Firebase_API_KEY,
  authDomain: "doctor-service-provider-2fd62.firebaseapp.com",
  projectId: "doctor-service-provider-2fd62",
  storageBucket: "doctor-service-provider-2fd62.appspot.com",
  messagingSenderId: process.env.REACT_APP_Firebase_messagingSenderId,
  appId: process.env.REACT_APP_Firebase_appID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
