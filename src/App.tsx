import React from 'react';
import styled from 'styled-components';
import { getRandomNote } from './utils/notes';
import EarTrainer from './components/templates/EarTrainer';
require('@openfonts/bangers_all');

function App() {
  const randomNote = getRandomNote();
  return (
    <AppContainer>
      <EarTrainer randomNote={randomNote} />
    </AppContainer>
  );
}

const AppContainer = styled.div`
  background-color: #74b9ff;
  padding: 32px;
  height: 100vh;
`;

export default App;
