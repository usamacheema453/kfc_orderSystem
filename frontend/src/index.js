import React from 'react';
import ReactDOM from 'react-dom/client'; // Correct import for React 18
import App from './App';
import { Provider } from 'react-redux';
import './index.css';
import { store } from './components/redux/store';

// Use ReactDOM.createRoot for React 18
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
