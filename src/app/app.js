import React from 'react';

import { add } from './utils/addition';
import '../styles/main.scss';

const App = () => (
  <article className="flex-container">
    <p>Addition (10 + 5): <span className="result-node">{add(5, 10)}</span></p>
    <img src="../assets/dinesh-haribabu.jpeg" />
    <button className="btn btn-success">Button</button>
  </article>
);

export default App;