import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAni8ig-V0FMYbKfVTXnhe6dxFOWMeGZ3A",
  authDomain: "balongonline.firebaseapp.com",
  projectId: "balongonline",
  storageBucket: "balongonline.appspot.com",
  messagingSenderId: "566884581538",
  appId: "1:566884581538:web:6dcb66cc4595f8f047d7fb",
  measurementId: "G-F4D89T37P3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


export default firebase.firestore();