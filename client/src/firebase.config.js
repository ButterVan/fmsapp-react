// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDF-db1qEwZI6qm8n5_oiw_tIgbVQkrCSs",
  authDomain: "fms-app-359d5.firebaseapp.com",
  projectId: "fms-app-359d5",
  storageBucket: "fms-app-359d5.appspot.com",
  messagingSenderId: "1077598705291",
  appId: "1:1077598705291:web:1a7128d4faa192a786268e",
  measurementId: "G-M4P8VCJ3N3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore()