import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
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
