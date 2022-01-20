import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAKeVQ6Oa0f4YSRyid8olrFskgPCR9PZn0",
  authDomain: "netflix2021-6aa5d.firebaseapp.com",
  projectId: "netflix2021-6aa5d",
  storageBucket: "netflix2021-6aa5d.appspot.com",
  messagingSenderId: "543075575304",
  appId: "1:543075575304:web:22f0ca26a7cb6f77a513bd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();
export { auth };
