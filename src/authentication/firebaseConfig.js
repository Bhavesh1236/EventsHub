// Import the functions you need from the SDKs you need

import { initializeApp } from "@react-native-firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyLMwSHKMYJwgwFH5vyWJKte7JgmClHLM",
  authDomain: "navigationapp-2a547.firebaseapp.com",
  projectId: "navigationapp-2a547",
  storageBucket: "navigationapp-2a547.appspot.com",
  messagingSenderId: "318215228345",
  appId: "1:318215228345:web:42f715b79fbab88c9f4468",
  measurementId: "G-C3Q4545DVB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);