import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfFz7_N_ZHI4ArIJ83FAgzxQUa_M5WABY",
  authDomain: "fir-5bbc3.firebaseapp.com",
  projectId: "fir-5bbc3",
  storageBucket: "fir-5bbc3.appspot.com",
  messagingSenderId: "713352769240",
  appId: "1:713352769240:web:52ad6a3a116fc42e4ef1ad",
  measurementId: "G-ZLLF1RE1YN"
};


  export default firebase.initializeApp(firebaseConfig)