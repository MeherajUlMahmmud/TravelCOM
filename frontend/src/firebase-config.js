import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAo8sBngScmFYrHIJlbBTWe3_X7G8dMgTk",
  authDomain: "web-auth-f8a19.firebaseapp.com",
  projectId: "web-auth-f8a19",
  storageBucket: "web-auth-f8a19.appspot.com",
  messagingSenderId: "605992698713",
  appId: "1:605992698713:web:4c3cbe9778416161010248",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
