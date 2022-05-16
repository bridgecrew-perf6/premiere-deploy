import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCCHG_Agva_SUsNbUxTTleN0eS-ro0gXc4",
    authDomain: "fir-database-c0109.firebaseapp.com",
    projectId: "fir-database-c0109",
    storageBucket: "fir-database-c0109.appspot.com",
    messagingSenderId: "433424590766",
    appId: "1:433424590766:web:fd200d594c241c4d02ca3f"
  };

  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app);