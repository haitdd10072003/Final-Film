import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC269aSfr8zjTiPDdmRpc2t0ojQr0_MJuA",
  authDomain: "filmvip-74b78.firebaseapp.com",
  projectId: "filmvip-74b78",
  storageBucket: "filmvip-74b78.appspot.com",
  messagingSenderId: "278792979545",
  appId: "1:278792979545:web:8d33851546490764d59d48",
  measurementId: "G-N59FTK220B",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
