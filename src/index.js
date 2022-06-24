import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Counter from './counter';
import Round from './round';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1>Round:</h1>
    <Round />
    <h1>Gamer 1:</h1>
    <Counter />
    <h1>Gamer 2:</h1>
    <Counter />
    <h1>Gamer 3:</h1>
    <Counter />
    <h1>Gamer 4:</h1>
    <Counter />
    <h1>Gamer 5:</h1>
    <Counter />
    <h1>Gamer 6:</h1>
    <Counter />
  </React.StrictMode>
);