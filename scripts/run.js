import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDnrEaexENyWEPRFzDZn8ppM5rb8yONYLQ",
  authDomain: "ruemlifee-77064.firebaseapp.com",
  projectId: "ruemlifee-77064",
  storageBucket: "ruemlifee-77064.appspot.com",
  messagingSenderId: "968969733368",
  appId: "1:968969733368:web:7dac1a70146f6c93dde70d",
  measurementId: "G-L0YRTKB30Y",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

db.collection("votingData")
  .doc("participations")
  .set({})
  .then(() => {
    console.log("All participations reset!");
  })
  .catch((error) => {
    console.error("Error resetting participations: ", error);
  });
