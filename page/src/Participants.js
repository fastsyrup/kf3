import './App.css';
import * as firebase from './firebase';
import React, { useState, useEffect  } from 'react';

const Entries = ({ data }) => {
    console.log(data);
 
    return (
        <ul>
            {data.map((item) => {
                return <li key={item}>{item}</li>
            })}
        </ul>
    );
}

const Participants = (props) => {
    const [participants, setParticipants] = useState([]);
    // TODO implement data streaming
    useEffect(() => {
        ( () => {
             firebase.getParticipantsList2((doc) => {
                let p = [];
                //console.log("doc");
                doc.docs.map((doc) => { return p.push(doc.data().Name) });
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
