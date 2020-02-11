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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();
    
    if(!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }

       
    }
    return userRef;
}

firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({promt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;