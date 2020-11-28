import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyACjbLeunDmuNotqSSG0_722AXC866GM9E",
    authDomain: "herm-c028a.firebaseapp.com",
    databaseURL: "https://herm-c028a.firebaseio.com",
    projectId: "herm-c028a",
    storageBucket: "herm-c028a.appspot.com",
    messagingSenderId: "1079722293441",
    appId: "1:1079722293441:web:8e1596a0c47343700abc40",
    measurementId: "G-435W2N8DPQ"
});

const db = firebaseApp.firestore();

export { db };