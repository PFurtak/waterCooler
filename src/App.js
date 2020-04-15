import React, { useEffect } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import 'materialize-css/dist/css/materialize.min.css';
import SearchBar from './components/layout/SearchBar';
import AddBtn from './components/layout/AddBtn';
import AddLogModal from './components/logs/AddLogModal';
import Logs from './components/logs/Logs';

const App = () => {
  //Initialize Materialize JS
  useEffect(() => {
    M.AutoInit();
  });

  return (
    <div className='App'>
      <SearchBar />
      <div className='container'>
        <AddBtn />
        <AddLogModal />
        <Logs />
      </div>
    </div>
  );
};

export default App;
