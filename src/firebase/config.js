import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA_P05ZYRJIf0zR_c7aJbXORyycQXzWFK0",
  authDomain: "ewheels-eab93.firebaseapp.com",
  projectId: "ewheels-eab93",
  storageBucket: "ewheels-eab93.appspot.com",
  messagingSenderId: "367758287198",
  appId: "1:367758287198:web:d9b69186944e076ff12fcf"
};

export default function getFirestoreApp(){
    return initializeApp(firebaseConfig)
}