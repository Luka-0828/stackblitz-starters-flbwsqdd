import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBqiBtBdFucZgSVK1FNBL-xrBQC7YeYg-Q",
  authDomain: "firestore-databasment.firebaseapp.com",
  projectId: "firestore-databasment",
  storageBucket: "firestore-databasment.appspot.com",
  messagingSenderId: "614898746156",
  appId: "1:614898746156:web:7af024ae291c6cecf22289",
  measurementId: "G-RQBNB9VFJX"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);