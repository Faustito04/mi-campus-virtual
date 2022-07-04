import React from 'react';
import ReactDOM from 'react-dom/client';

const Chau = () => {<h2>Chau</h2>}

const rootNode = document.getElementById('chau-root');
const root = ReactDOM.createRoot(rootNode);
root.render(React.createElement(Chau));
