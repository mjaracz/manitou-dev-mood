import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './app/App';

import './index.css';


ReactDOM.render(
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>, 
  document.getElementById('root'));
registerServiceWorker();
