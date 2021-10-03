import './App.css';
import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import * as firebase from './firebase';

const InnerContainer = styled.div`
  display: flex;
  max-width: 800px;
  width: 100%;
  flex-wrap: wrap;
`;

const OuterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  height: 100vh;
`;

function App() {
  const [voteData, setVoteData] = useState();

  useEffect(() => {
    (async () => {
      const dataShell = await firebase.getVotesList();
      const data = dataShell.data();
      console.log(data.fields);
    })()
  }, []);

  return (
    <div className="App">
      <OuterContainer>
        <InnerContainer>
          Blä2
        </InnerContainer>
      </OuterContainer>
    </div>
  );
}

export default App;
