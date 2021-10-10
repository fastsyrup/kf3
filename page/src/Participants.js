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
        res += entry.Name
    })
    return res;
}

const Participants = (props) => {
    const [participants, setParticipants] = useState();
    useEffect(() => {
        (async () => {
            const data = await firebase.getParticipantsList();
            setParticipants(data);
            console.log("Participants");
            console.log(data);
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
