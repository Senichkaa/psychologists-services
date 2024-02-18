// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCzfSkzDGp-msm_iIG4Kz5H3LFR1E8-Quo',
  authDomain: 'psycho-senya.firebaseapp.com',
  databaseURL:
    'https://psycho-senya-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'psycho-senya',
  storageBucket: 'psycho-senya.appspot.com',
  messagingSenderId: '856266522711',
  appId: '1:856266522711:web:23caff5ab9af882e58e312',
  measurementId: 'G-P9LT0739P3',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getDatabase(app);
