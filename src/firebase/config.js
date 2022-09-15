import { initializeApp } from "firebase/app";

import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyDCfbDyr0_63GnR6IGc6JnWzKPmcXnNoYc",
  authDomain: "heroapp-48e0f.firebaseapp.com",
  projectId: "heroapp-48e0f",
  storageBucket: "heroapp-48e0f.appspot.com",
  messagingSenderId: "746866406537",
  appId: "1:746866406537:web:4ab687d055e5908dfa8258",
  measurementId: "G-6ZDXEM4M03"
};

const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);