import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.module.sass'
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <Router>
    <App />
  </Router>
  </Provider>
);

reportWebVitals();
