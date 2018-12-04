import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './App/App';

import './index.css';

import { Provider } from 'react-redux';
import {createEpicMiddleware} from "redux-observable";
import {rootEpic} from "./duck/epics";
import {applyMiddleware, createStore} from "redux";
import {rootReducer} from "./duck/reducers";

const epicMiddleware = createEpicMiddleware();
epicMiddleware.run(rootEpic);

const store = createStore(rootReducer, applyMiddleware(epicMiddleware));

ReactDOM.render(
  <MuiThemeProvider>
	  <Provider store={store}>
      <App />
	  </Provider>
  </MuiThemeProvider>, 
  document.getElementById('root'));
registerServiceWorker();
