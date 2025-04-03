import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrhAwTdxJoILf5d3fbiNG5_TFxy0zc5Ns",
  authDomain: "testly-b5eba.firebaseapp.com",
  projectId: "testly-b5eba",
  storageBucket: "testly-b5eba.firebasestorage.app",
  messagingSenderId: "841808576098",
  appId: "1:841808576098:web:c24bfcc8aed5a9cebb9b3b",
  measurementId: "G-KJ4KXGL255"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);