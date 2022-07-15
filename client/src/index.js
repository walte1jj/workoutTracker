import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AuthProvider } from './context/AuthProvider';
import {NavigationProvider, useNav} from "./context/NavigationProvider"

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <NavigationProvider>
      <App />
      </NavigationProvider>
    </AuthProvider>
  </React.StrictMode>, 
  document.getElementById('root')
);

