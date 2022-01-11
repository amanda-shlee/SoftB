import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyC5PzL-T64bPF9rSR88XHh_es35Yf2O4uE',
  authDomain: 'soft-b.firebaseapp.com',
  projectId: 'soft-b',
  storageBucket: 'soft-b.appspot.com',
  messagingSenderId: '559453634091',
  appId: '1:559453634091:web:a4750f442707d2b7d8346e',
  measurementId: 'G-FDDR2BT5N0',
};

firebase.initializeApp(firebaseConfig);
const firebaseDb = firebase.database();
const firebaseAuth = firebase.auth();

export {firebaseDb, firebaseAuth};
