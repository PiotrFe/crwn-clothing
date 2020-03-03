import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAazos1cSO3DHHsxsfKhuPtaq3l2iDaXIU",
  authDomain: "crwn-db-7d2f3.firebaseapp.com",
  databaseURL: "https://crwn-db-7d2f3.firebaseio.com",
  projectId: "crwn-db-7d2f3",
  storageBucket: "crwn-db-7d2f3.appspot.com",
  messagingSenderId: "920744208488",
  appId: "1:920744208488:web:6c8d9ad30ec455a36bf3dd",
  measurementId: "G-RRDKW1T79W"
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
        ...additionalData
      })
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
