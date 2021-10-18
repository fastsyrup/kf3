import './App.css';
import * as firebase from './firebase';
import React, { useState, useEffect  } from 'react';

const Participants = (props) => {
    const [participants, setParticipants] = useState([]);
    // TODO implement data streaming
    useEffect(() => {
        ( () => {
             firebase.getParticipantsList2((doc) => {
                let p = [];
                // console.log("doc");
                // console.log(doc);
                doc.docs.map((doc) => { return p.push(doc.data()) });
 
                setParticipants(p);
                console.log("participants");
                console.log(participants);
            });

        })()
    }, []);

    return (
        <div>
            <h3>Teilnehmer</h3>
            <ul>
                {participants.map((item) => {
                    if(item.selected === "Ja") return <li key={item.Name}>{item.Name}</li>
                })}
            </ul>
            <h3>Absagen</h3>
            <ul>
                {participants.map((item) => {
                    if(item.selected === "Nein") return <li key={item.Name}>{item.Name}</li>
                })}
            </ul>
            <h3>Vielleicht</h3>
            <ul>
                {participants.map((item) => {
                    if(item.selected === "Vielleicht") return <li key={item.Name}>{item.Name}</li>
                })}
            </ul>
        </div>
    )
}

export default Participants;
