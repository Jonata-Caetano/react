import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBmXHKpcC_Ei5xb3juda67Dii0lfzg30Jc",
  authDomain: "miniblog-68884.firebaseapp.com",
  projectId: "miniblog-68884",
  storageBucket: "miniblog-68884.appspot.com",
  messagingSenderId: "9910026417",
  appId: "1:9910026417:web:51b413a655fd5700a7e290",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };	
