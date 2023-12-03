import { initializeApp } from "@react-native-firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyCyLMwSHKMYJwgwFH5vyWJKte7JgmClHLM",
  authDomain: "navigationapp-2a547.firebaseapp.com",
  projectId: "navigationapp-2a547",
  storageBucket: "navigationapp-2a547.appspot.com",
  messagingSenderId: "318215228345",
  appId: "1:318215228345:web:42f715b79fbab88c9f4468",
  measurementId: "G-C3Q4545DVB"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);