import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDsk-HscNSkvbA9npKClQ2mXxCs16YqVA4",
  authDomain: "healthvault-2eba7.firebaseapp.com",
  projectId: "healthvault-2eba7",
  storageBucket: "healthvault-2eba7.appspot.com",
  messagingSenderId: "979465295770",
  appId: "1:979465295770:web:740eed65504d38f9040c23",
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
