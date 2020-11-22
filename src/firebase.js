import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
apiKey: "AIzaSyD47BjVtpFooRD7uY3YqfOq_snqXo8rrDI",
  authDomain: "clone-90d65.firebaseapp.com",
  databaseURL: "https://clone-90d65.firebaseio.com",
  projectId: "clone-90d65",
  storageBucket: "clone-90d65.appspot.com",
  messagingSenderId: "482315761395",
  appId: "1:482315761395:web:f7b33d87d785fa61926986",
  measurementId: "G-QXEDJ1P8QT"

})

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth}
