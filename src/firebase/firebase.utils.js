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

// Take user object that we got from auth library, and stor it in our database
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  // Use this docRefObject for CRUD operations
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  // Need snapShot because of some properties, simply represents object data
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('Error creating user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Google auth
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
