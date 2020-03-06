import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyASMRqxrE8nnZSGzbnklBHb-wIGUp15pkY',
  authDomain: 'ecomm-db-e23d6.firebaseapp.com',
  databaseURL: 'https://ecomm-db-e23d6.firebaseio.com',
  projectId: 'ecomm-db-e23d6',
  storageBucket: 'ecomm-db-e23d6.appspot.com',
  messagingSenderId: '726955834416',
  appId: '1:726955834416:web:af09e194ede6ef20a581f5',
  measurementId: 'G-KGWK7M9J19',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      console.log('error creating user', err.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
