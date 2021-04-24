import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBvV8qfA4QZ0xvxT6rV4erklmiEFk3xedQ",
    authDomain: "minggu11-8751a.firebaseapp.com",
    projectId: "minggu11-8751a",
    storageBucket: "minggu11-8751a.appspot.com",
    messagingSenderId: "981684076502",
    appId: "1:981684076502:web:4f16a92c5adce436d0ae77",
    measurementId: "G-57LP8HXNNR"
  };

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;