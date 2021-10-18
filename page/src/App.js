import './App.css';
//import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { Container, Row } from "react-bootstrap";

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

    return (
        <div className="App">
            <OuterContainer>
                <InnerContainer>
                    <Container fluid>
                        <Row>
                            <h1>Kalenderfee 2.0</h1>
                        </Row>
                        <Row>
                            <Vote />
                        </Row>
                        <Row>
                            <Participants />
                        </Row>
                    </Container>
                </InnerContainer>
            </OuterContainer>
        </div>
    );
}

export default App;
