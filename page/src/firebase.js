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

//console.log(firebaseConfig);

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export const auth = firebase.auth();

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

export const addParticipant = (data, participationData) => {
  console.log("Adding participation");
  console.log(data);
  const p = participationData;
  // console.log("p before");
  // console.log(p);

  // check if participationData.Ja exists, if not create it and add name
  // as first value to the array
  if (!p[data.selected]) {
    // console.log("setting emtpy p");
    p[data.selected] = [data.Name];
  } else {
    // console.log("pushing non emtpy p");
    p[data.selected].push(data.Name);
  }
  // console.log("p after");
  // console.log(p);

  // TODO add options to data object
  if (data.options && data.options.length) {
    console.log("Options detected");
    data.options.forEach((option) => {
      if (!p[option]) {
        p[option] = [data.Name];
      } else {
        p[option].push(data.Name);
      }
    });
  }

  setParticipants(p);
  console.log("Participation Data after add");
  console.log(p);
};

export const deleteParticipant = (name, participationData) => {
  console.log("Delete");
  console.log(name);
  console.log(participationData);
  let clone = { ...participationData };
  console.log("Clone");
  console.log(clone);
  for (var prop in clone) {
    console.log("o." + prop + " = " + clone[prop]);
    var filtered = clone[prop].filter((value, index, clone) => {
      console.log(value);
      console.log(name);
      return String(value) !== String(name);
    });
    clone[prop] = filtered;
  }
  console.log("res");
  console.log(clone);
  setParticipants(clone);
};
