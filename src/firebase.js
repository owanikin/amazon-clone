import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyAY8TuECAlR7wQMauHVQnTfoXaN1Q2gurY",
  authDomain: "clo-b85a5.firebaseapp.com",
  projectId: "clo-b85a5",
  storageBucket: "clo-b85a5.appspot.com",
  messagingSenderId: "1059262506493",
  appId: "1:1059262506493:web:65eff65bbdada85de86594",
  measurementId: "G-BXLXDDX983"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore();
const auth = firebase.auth()

export {db, auth}
