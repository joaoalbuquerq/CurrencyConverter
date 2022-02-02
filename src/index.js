import React from 'react';
import ReactDOM from 'react-dom';
import CurrencyConverter  from "./Converter";
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(
  <React.StrictMode>
    <CurrencyConverter/>
  </React.StrictMode>,
  document.getElementById('root')
);

