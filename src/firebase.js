import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAc0r-9TjDug3WocqfLGzHmA0YX3c7iJLY",
    authDomain: "clone-f8df8.firebaseapp.com",
    projectId: "clone-f8df8",
    storageBucket: "clone-f8df8.appspot.com",
    messagingSenderId: "683957654032",
    appId: "1:683957654032:web:e92256b765d7b0fd1a3095",
    measurementId: "G-WM8GK069BS"
  };

// const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };