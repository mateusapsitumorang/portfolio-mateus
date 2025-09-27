import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from '../src/main-component/App/App';
import reportWebVitals from './reportWebVitals';
import './css/font-awesome.min.css';
import './css/themify-icons.css';
import './css/flaticon.css';
import './css/animate.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './sass/style.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter basename="/portfolio-mateus">
    <App />
  </BrowserRouter>
);

reportWebVitals();