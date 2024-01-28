import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { PostProvider } from './components/services/handleRequest/handleRequest';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <Router>
      <PostProvider.Provider>
        <App />
      </PostProvider.Provider>
    </Router>
);

reportWebVitals();
