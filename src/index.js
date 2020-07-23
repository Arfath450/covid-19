import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import AddToHomescreen from 'react-add-to-homescreen';
import { BrowserRouter } from 'react-router-dom';



const Click = () => {
  alert('Add Covid-19 To HomeScreen');
};

ReactDOM.render(
    
  <>
  <BrowserRouter basename={process.env.PUBLIC_URL}>
  <div>
    <App/>
  </div>
    <AddToHomescreen onAddToHomescreenClick={Click}/>
  </BrowserRouter>
  </>,
  document.getElementById('root')
);

serviceWorker.register();
