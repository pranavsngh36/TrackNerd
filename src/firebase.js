import { initializeApp } from "firebase/app";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDahAZLP3Fe68j9C-7ZT9i0nAqiQWXhs_4",
  authDomain: "http://tracknerd-staging.firebaseapp.com/",
  databaseURL: "https://tracknerd-staging-default-rtdb.firebaseio.com/",
  storageBucket: "tracknerd-staging.appspot.com",
  messagingSenderId: "726037811463",
  appId: "1:847967007196:web:ae4df284f5560af4139f19"
};

export const app = initializeApp(firebaseConfig);
