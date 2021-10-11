import './App.css';
import * as firebase from './firebase';
import React, { useState, useEffect } from 'react';

const Entries = ({ data }) => {
    console.log("Entries");
    console.log(data);
    if (!data) return "";
    let res = "";
    data.forEach((entry) => {
        console.log(entry);
        res += entry
    })
    return res;
}

const Participants = (props) => {
    const [participants, setParticipants] = useState();
    // TODO implement data streaming
    useEffect(() => {
        (async () => {
            await firebase.getParticipantsList2((doc) => {
                let p = [];
                //console.log("doc");
                doc.docs.map((doc) => { return p.push(doc.data().Name) });
                console.log("p");
                console.log(p);
                setParticipants(p);
            });

        })()
    }, []);

    return (
        <div>
            <h3>Teilnehmer</h3>
            <Entries data={participants} />

        </div>
    )
}

export default Participants;
