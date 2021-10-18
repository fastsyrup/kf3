import './App.css';
//import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { Container, Row } from "react-bootstrap";
import React, { useState, useEffect } from 'react';
import * as firebase from './firebase';
import Vote from './Vote';
import Participants from './Participants'

const InnerContainer = styled.div`
  display: flex;
  max-width: 800px;
  width: 100%;
  flex-wrap: wrap;
  justify-content: left;
  padding: 20px;
`;

const OuterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  height: 100vh;
`;

function App() {
    const [settingsData, setSettingsData] = useState({});
    const [participationData, setParticipationData] = useState({});

    useEffect(() => {
        (async () => {
            await firebase.subParticipationData(setParticipationData);
            await firebase.subSettingsData(setSettingsData);
        })()
    }, []);

    const addParticipant = (data) => {
        console.log("Adding participation");
        console.log(data);
        const p = participationData;
        // console.log("p before");
        // console.log(p);
        if(!p[data.selected]) {
            // console.log("setting emtpy p");
            p[data.selected] = [data.Name]
        } else {
            // console.log("pushing non emtpy p");
            p[data.selected].push(data.Name)
        }      
        // console.log("p after");
        // console.log(p);

        // TODO add options to data object
        if(data.options && data.options.length) {
            console.log("Options detected");
            data.options.forEach((option => {
                if(!p[option]) {
                    p[option] = [data.Name];
                } else {
                    p[option].push(data.Name);
                }
            }));
        }

        firebase.setParticipants(p);
        console.log("Participation Data after add");
        console.log(p);
    }

    return (
        <div className="App">
            <OuterContainer>
                <InnerContainer>
                    <Container fluid>
                        <Row>
                            <h1>Kalenderfee 2.0</h1>
                        </Row>
                        <Row>
                            <Vote settings={settingsData} addParticipant={addParticipant} /> 
                        </Row>
                        <Row>
                            <Participants participants={participationData} settings={settingsData}/>
                        </Row>
                    </Container>
                </InnerContainer>
            </OuterContainer>
        </div>
    );
}

export default App;
