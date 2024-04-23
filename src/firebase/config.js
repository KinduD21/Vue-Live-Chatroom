import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCheENJGEgnlV7-8fqbOn_y4GchOzrJ13E",
  authDomain: "vue-sites-e9873.firebaseapp.com",
  projectId: "vue-sites-e9873",
  storageBucket: "vue-sites-e9873.appspot.com",
  messagingSenderId: "932275354953",
  appId: "1:932275354953:web:c4b70ebdc24b2f7104ae98",
};

firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectAuth, projectFirestore, timestamp };
