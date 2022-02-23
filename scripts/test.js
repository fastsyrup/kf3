import venom from "venom-bot";

const  main = async ()  =>  {
    try {
        const client = await venom.create({
            session: "session-name", //name of session
            multidevice: false, // for version not multidevice use false.(default: true)
        })
        const res = await client.sendText("41796214534@c.us", "gasdf");
        console.log(res);
        
    } catch (e) {
        console.log("Errror");
        console.log(e);
        process.exit();
    }
}

main();

// try {
//     venom
//       .create({
//         session: "session-name", //name of session
//         multidevice: false, // for version not multidevice use false.(default: true)
//       })
//         .then((wa_client) => { 
//             wa_client.sendText("0041796214534@c.us", "gasdf")
//                 .then((res => { console.log(res) })
//                     .catch((err) => {
//                         console.log("error sending");
//                         console.log(err);
//                     })
//             );
//         })
//       .catch((erro) => {
//         console.log("Could not start venom");
//         console.log(erro);
//       });
//   } catch (e) {
//     console.log("General error");
//     console.log(erro);
//     //process.exit();
// }