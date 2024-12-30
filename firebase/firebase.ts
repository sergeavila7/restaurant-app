import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage'; 
import firebaseConfig from './config';

class Firebase {
  db: firebase.firestore.Firestore;
  storage: firebase.storage.Storage;

  constructor() {
    if (!firebase.apps.length && firebaseConfig) {
      firebase.initializeApp(firebaseConfig);
    } else if (!firebaseConfig) {
      throw new Error('Firebase configuration is missing');
    }

    this.db = firebase.firestore();
    this.storage = firebase.storage();
  }
}

const firebaseApp = new Firebase();

export default firebaseApp;
