import React from 'react';
import styled from 'styled-components';

import { add } from './utils/addition';

const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100%;
`;

const App = () => (
  <StyledArticle>
    <p>Addition (10 + 5): <span className="result-node">{add(5, 10)}</span></p>
    <img src="../assets/dinesh-haribabu.jpeg" />
    <button>Button</button>
  </StyledArticle>
);

export default App;
