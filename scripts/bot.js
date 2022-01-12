import venom from "venom-bot";
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

try {
  venom
    .create({
      session: "session-name", //name of session
      multidevice: false, // for version not multidevice use false.(default: true)
    })
    .then((wa_client) => main(wa_client))
    .catch((erro) => {
      console.log(erro);
    });
} catch (e) {
  console.log("Exiting due to error");
  process.exit();
}

const init_db = async () => {
  firebase.initializeApp(firebaseConfig);
  const db = await firebase.firestore();
  await firebase.auth().signInAnonymously();
  console.log("db loaded");
  return db;
};

const reset_participants = async (db) => {
  await db.collection("votingData").doc("participations").set({});
  console.log("participants deleted");
};

const load_contacts = async (db) => {
  let res = [];
  const querySnapshot = await db.collection("contacts").get();

  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log("contact: ", doc.id, " => ", doc.data());
  });
  console.log("contacts loaded");
  return res;
};

const notify_contacts = async (contacts, wa_client) => {
  const result = await wa_client.sendText(
    "0041796214534@c.us",
    "👋 Hello from venom!"
  );
  console.log(result);
};

const main = async (wa_client) => {
  const db = await init_db();
  await reset_participants(db);
  const contacts = await load_contacts(db);
  await notify_contacts(contacts, wa_client);
  console.log("Exiting normally");
  process.exit();

  /*   client.onMessage((message) => {
    console.log("Message: ", message); //return object success
    if (message.body === "Hi" && message.isGroupMsg === false) {
      client
        .sendText(message.from, "Welcome Venom 🕷")
        .then((result) => {
          console.log("Result: ", result); //return object success
        })
        .catch((erro) => {
          console.error("Error when sending: ", erro); //return object error
        });
    }
  }); */
};
