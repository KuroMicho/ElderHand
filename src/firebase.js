import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB8xixOQ37XAceXArFaUTWff09bI83MEK4",
  authDomain: "elder-hand.firebaseapp.com",
  projectId: "elder-hand",
  storageBucket: "elder-hand.appspot.com",
  messagingSenderId: "80023165909",
  appId: "1:80023165909:web:eac3a581ee3b1ec6a7bb5c",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = {
  facebook: new firebase.auth.FacebookAuthProvider(),
  google: new firebase.auth.GoogleAuthProvider(),
};

export { db, auth, provider };
