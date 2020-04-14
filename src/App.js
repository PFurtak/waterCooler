import React, { useEffect } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import 'materialize-css/dist/css/materialize.min.css';

const App = () => {
  //Initialize Materialize JS
  useEffect(() => {
    M.AutoInit();
  });

  return <div className='App'>Water Cooler!</div>;
};

export default App;
