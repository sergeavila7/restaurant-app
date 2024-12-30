import Constants from "expo-constants";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = Constants.expoConfig?.extra?.firebase;

let firebaseApp: firebase.app.App | null = null;

if (firebaseConfig) {
  firebaseApp = firebase.initializeApp(firebaseConfig);
} else {
  console.error("Firebase configuration is missing.");
}

export default firebaseApp;
