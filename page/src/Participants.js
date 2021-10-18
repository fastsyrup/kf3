import './App.css';
//import React, { useState, useEffect  } from 'react';

const Participants = ({participants, settings}) => {
    console.log('Participants');
    console.log(participants);
    console.log(settings);
    return (
        <div>
            <h3>Anmeldungen bisher</h3>
            {settings.fields && settings.fields.map((item) => (
                <div>
                    {item}
                    {participants && participants[item] && participants[item].map((entry) => (
                        <li>{entry}</li>
                    ))}
                </div>
            ))} 
             {settings.options && settings.options.map((item) => (
                <div>
                    {item}
                    {participants && participants[item] && participants[item].map((entry) => (
                        <li>{entry}</li>
                    ))}
                </div>
            ))} 
        </div>
    )
}

export default Participants;
