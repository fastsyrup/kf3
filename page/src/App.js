import "./App.css";
//import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import React, { useState, useEffect } from "react";
import * as firebase from "./firebase";
import Vote from "./Vote";
import Participants from "./Participants";

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
      await firebase.auth.signInAnonymously();
      await firebase.subParticipationData(setParticipationData);
      await firebase.subSettingsData(setSettingsData);
    })();
  }, []);

  const deleteParticipant = (name) => {
    firebase.deleteParticipant(name, participationData);
  };
  return (
    <div className="App">
      <OuterContainer>
        <InnerContainer>
          <Container fluid>
            <Row>
              <h1>Kalenderfee 2.0</h1>
            </Row>
            <Row>
              <Vote
                settings={settingsData}
                participationData={participationData}
                addParticipant={firebase.addParticipant}
              />
            </Row>
            <Row>
              <Participants
                participants={participationData}
                settings={settingsData}
                setParticipants={firebase.setParticipants}
                deleteParticipant={deleteParticipant}
              />
            </Row>
          </Container>
        </InnerContainer>
      </OuterContainer>
    </div>
  );
}

export default App;
