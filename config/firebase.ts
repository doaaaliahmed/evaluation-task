import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {

  apiKey: "AIzaSyA8zM6oDoV6no17YEWW1baqxYoaJhSB46A",
  authDomain: "evaluation-task-5fe92.firebaseapp.com",
  projectId: "evaluation-task-5fe92",
  storageBucket: "evaluation-task-5fe92.appspot.com",
  messagingSenderId: "41416951636",
  // appId: "1:41416951636:web:a95ea9983266dc28f56ac1",

};

// Initialize Firebase
export const intialization = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(intialization);
export const database = getFirestore(intialization);
export default intialization;
