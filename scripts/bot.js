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

/********************************************************************************* */

const init_db = async () => {
  firebase.initializeApp(firebaseConfig);
  const db = await firebase.firestore();
  await firebase.auth().signInAnonymously();
  console.log("db loaded");
  return db;
};

/********************************************************************************* */

const reset_participants = async (db) => {
  await db.collection("votingData").doc("participations").set({});
  console.log("participants deleted");
};

/********************************************************************************* */

const load_contacts = async (db) => {
  let res = [];
  const querySnapshot = await db.collection("contacts").get();

  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log("contact: ", doc.id, " => ", doc.data());
    const v = {};
    res.push({ name: doc.id, phone: doc.data().phone });
  });
  console.log("contacts loaded:");
  console.log(res);
  console.log("---");
  return res;
};

/********************************************************************************* */

const notify_contacts = async (contacts, wa_client) => {
  console.log("Contacting contacts:");
  console.log(contacts);
  console.log("---");

  for (let contact of contacts) {
    try {
      console.log("Contacting contact:");
      console.log(contact);
      const message =
        "Hi " +
        contact.name +
        ", kommst du heute abend auch ins Rümli? Bitte hier an- der abmelden. https://www.kalenderfee.com. Geile siech!🙏🙏🙏";
      console.log("phone: " + contact.phone + ", message: " + message);
      const result = await wa_client.sendText(contact.phone, message);
      //const result = await wa_client.sendText("0041796214534@c.us", "gaga");
      console.log(result);
    } catch (e) {
      console.log("Error contacting contact: " + contact.name);
      console.log(e);
    }
  }
};

/********************************************************************************* */
// Main loop
const main = async (wa_client) => {
  // wa_client.onMessage((message) => {
  //   console.log("Message: ", message); //return object success
  //   if (
  //     message.body === "!bot" &&
  //     message.from === "41786252829-1605721561@g.us"
  //   ) {
  //     wa_client
  //       .sendText(message.from, "Ping")
  //       .then((result) => {
  //         console.log("Result: ", result); //return object success
  //       })
  //       .catch((erro) => {
  //         console.error("Error when sending: ", erro); //return object error
  //       });
  //   }
  // });
  try {
    const db = await init_db();
    //await reset_participants(db);
    const contacts = await load_contacts(db);
    await notify_contacts(contacts, wa_client);
    console.log("Exiting normally");
  } catch (e) {
    console.log("Error - Exiting!!!");
    console.log(e);
  } finally {
    process.exit();
  }
};

/*********************************************************************************/
// Main entry point
try {
  venom
    .create({
      session: "session-name", //name of session
      multidevice: false, // for version not multidevice use false.(default: true)
    })
    .then((wa_client) => main(wa_client))
    .catch((erro) => {
      console.log("Could not start venom");
      console.log(erro);
    });
} catch (e) {
  console.log("General error");
  console.log(erro);
  process.exit();
}
