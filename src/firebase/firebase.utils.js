import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Project overview -> Add app -> Get config
const config = {
  apiKey: 'AIzaSyCqFA2GZii4GzA24H4osjjAX2n4nq53xzQ',
  authDomain: 'crwn-db-exercise.firebaseapp.com',
  databaseURL: 'https://crwn-db-exercise.firebaseio.com',
  projectId: 'crwn-db-exercise',
  storageBucket: 'crwn-db-exercise.appspot.com',
  messagingSenderId: '450904179240',
  appId: '1:450904179240:web:cc01d2e12205e931b8eb1d',
  measurementId: 'G-T5D4JHYCCL'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Google auth
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
