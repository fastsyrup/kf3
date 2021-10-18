import './App.css';
//import React, { useState, useEffect  } from 'react';

const Participants = ({participants, settings}) => {
    // console.log('Rendering Participants');
    // console.log(participants);
    // console.log(settings);
    return (
        <div>
            <h3>Anmeldungen bisher</h3>
            {settings.fields && settings.fields.map((item) => (
                <div key={item}>
                    {item}
                    {participants && participants[item] && participants[item].map((entry) => (
                        <li key={entry}>{entry}</li>
                    ))}
                </div>
            ))} 
            <h3>Optionen</h3>
            {settings.options && settings.options.map((item) => (
                <div key={item}>
                    {item}
                    {participants && participants[item] && participants[item].map((entry) => (
                        <li key={entry}>{entry}</li>
                    ))}
                </div>
            ))} 
        </div>
    )
}

export default Participants;
