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

console.log(firebaseConfig);

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export const setParticipants = (data) => {
  console.log("Setting Participation data to DB");
  console.log(data);
  return db.collection("votingData").doc("participations").set(data);
};

export const subParticipationData = async (setData) => {
  return db
    .collection("votingData")
    .doc("participations")
    .onSnapshot((doc) => {
      setData(doc.data());
      console.log("Loaded following participation data from DB");
      console.log(doc.data());
    });
};

export const subSettingsData = async (setData) => {
  return db
    .collection("votingData")
    .doc("settings")
    .onSnapshot((doc) => {
      setData(doc.data());
      console.log("Loaded following settings data from DB");
      console.log(doc.data());
    });
};
