import { initializeApp } from "firebase/app";

import {getAuth,createUserWithEmailAndPassword} from "firebase/auth"



const firebaseConfig = {
  apiKey: "AIzaSyCtFP7xZnoRur_Q1xMh9fG3PTiG6xGR8Mo",
  authDomain: "auth-proyect1.firebaseapp.com",
  projectId: "auth-proyect1",
  storageBucket: "auth-proyect1.appspot.com",
  messagingSenderId: "899401823219",
  appId: "1:899401823219:web:9cbf122c28e81bb60fd886"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export const signup= (email,password) => {
 return createUserWithEmailAndPassword(auth,email,password)
}