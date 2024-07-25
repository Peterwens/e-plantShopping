import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Provider } from 'react-redux'; // Import the Provider component from react-redux
import store from './store.js'; // Import the Redux store from store.js

// Render the application
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Wrap the App with Provider and pass the Redux store as a prop */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
