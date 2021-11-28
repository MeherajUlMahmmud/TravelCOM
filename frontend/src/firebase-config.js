//step 1

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDDoQVfWiQBL-EVFttgM1bV7FwrUSgfYLc",
  authDomain: "react-auth-test-4310d.firebaseapp.com",
  projectId: "react-auth-test-4310d",
  storageBucket: "react-auth-test-4310d.appspot.com",
  messagingSenderId: "791116912963",
  appId: "1:791116912963:web:3f10acfcd01d6ceabeb7f6",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
