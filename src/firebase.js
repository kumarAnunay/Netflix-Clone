// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCeQ7Wc5sIwjlDH13tdH075pkMpjEPjxc",
  authDomain: "netflix-clone-2b4a5.firebaseapp.com",
  projectId: "netflix-clone-2b4a5",
  storageBucket: "netflix-clone-2b4a5.appspot.com",
  messagingSenderId: "1013911069824",
  appId: "1:1013911069824:web:9a1a8d2b03c8167ecbb265",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
