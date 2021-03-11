import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCtfsRb_UQANEnpNfEuh1x8fE5u2XFFwxc",
    authDomain: "slack-clone-b6c5a.firebaseapp.com",
    projectId: "slack-clone-b6c5a",
    storageBucket: "slack-clone-b6c5a.appspot.com",
    messagingSenderId: "1034314590152",
    appId: "1:1034314590152:web:d9dc598b6c51cdcbb702fd",
    measurementId: "G-KCFR1JQ9P7"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();
export { db,auth,storage,provider }