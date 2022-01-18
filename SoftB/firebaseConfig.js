import firestore from '@react-native-firebase/firestore';

export const getAllData = db => firestore().collection(db).get();

export const getData = (db, uid) => firestore().collection(db).doc(uid).get();

export const getRealtimeData = (db, uid) => firestore().collection(db).doc(uid);

export const getUser = uid => firestore().collection('users').doc(uid).get();

export const addData = (db, uid) => firestore().collection(db).doc(uid).add({});

export const updateData = (db, uid) => firestore().collection(db).doc(uid);
