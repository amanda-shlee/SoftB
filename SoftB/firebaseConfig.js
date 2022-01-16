import firestore from '@react-native-firebase/firestore';

export const getUsers = firestore().collection('users').get();
export const getUser = uid => firestore().collection('users').doc(uid).get();
