import { initializeApp } from "firebase/app";
import firebaseConfig from './Firebase.congfing';
const FirebaseInitialization = () => {
   return initializeApp(firebaseConfig)
}

export default FirebaseInitialization;