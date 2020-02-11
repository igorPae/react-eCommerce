import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBvMOIIFGik4NNJwvZlrBUhDhA096dJdUs",
    authDomain: "e-commerce-ec30f.firebaseapp.com",
    databaseURL: "https://e-commerce-ec30f.firebaseio.com",
    projectId: "e-commerce-ec30f",
    storageBucket: "e-commerce-ec30f.appspot.com",
    messagingSenderId: "381679158426",
    appId: "1:381679158426:web:6faf37054dd503b7b38b23"
};

firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({promt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;