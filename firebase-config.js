// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDooqZ7dQCSg88iMo91cDRVEdNF0v9bEDg",
  authDomain: "coffee-style-fe-tailwindcss.firebaseapp.com",
  projectId: "coffee-style-fe-tailwindcss",
  storageBucket: "coffee-style-fe-tailwindcss.appspot.com",
  messagingSenderId: "419026449329",
  appId: "1:419026449329:web:1146c20e7f30edf0614390",
  measurementId: "G-8K3G7C4E5G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);