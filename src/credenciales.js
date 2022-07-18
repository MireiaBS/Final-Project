
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAKx1kjhEmLESzMnXNGuzBlGGlXMar9wvw",
  authDomain: "proyecto-vaquetes.firebaseapp.com",
  projectId: "proyecto-vaquetes",
  storageBucket: "proyecto-vaquetes.appspot.com",
  messagingSenderId: "240634587888",
  appId: "1:240634587888:web:a3c9193904c86357813035"
};

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
