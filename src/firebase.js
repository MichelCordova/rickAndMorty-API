import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyABD0f-oXpJ270xo5dBKlrzzRfN2Q43sVE",
  authDomain: "login-react-api-rickandmorty.firebaseapp.com",
  projectId: "login-react-api-rickandmorty",
  storageBucket: "login-react-api-rickandmorty.appspot.com", // corregido
  messagingSenderId: "212518163807",
  appId: "1:212518163807:web:f46fea321e9eccdbd9d2ea",
};

// Inicializa Firebase
const appFirebase = initializeApp(firebaseConfig);

// Inicializa Auth
const auth = getAuth(appFirebase);

export { auth };
