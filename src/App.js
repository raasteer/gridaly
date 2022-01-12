import React from 'react';
import './App.css';

import styled from 'styled-components';

import { Box } from './Box'

function App() {
  return (
    <StyledWrapper>
      <Box
        defaultColor="#ccc"
      />
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  position: relative;
`

export default App;
