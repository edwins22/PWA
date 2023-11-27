import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import App from "../App";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCRuo31wXLu62O1rfhLVLuquBuYMh-t98Y",
  authDomain: "tareas-3979d.firebaseapp.com",
  projectId: "tareas-3979d",
  storageBucket: "tareas-3979d.appspot.com",
  messagingSenderId: "291921067317",
  appId: "1:291921067317:web:24fd82cd2e64c31a5aa07c"
};
// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();
