import React from 'react';
import ReactDOM from 'react-dom';
import FilmBox from './components/FilmBox.jsx'

window.addEventListener('load', () => {
  const targetDiv = document.getElementById('app');
  ReactDOM.render(<FilmBox />, targetDiv)
});

