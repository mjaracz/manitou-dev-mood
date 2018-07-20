import React, { Component } from 'react';

import store from '../redux/store';
import { Provider } from 'react-redux';

import Header from './Header';
import AbouteView from '../view/AbouteView';
import Apacze from './Apacze';
import Komancze from './Komancze';
import Czejenowie from './Czejenowie';
import Signin from './Signin';
import KontaktView from '../view/KontaktView';
import PrawoView from '../view/PrawoView';
import Register from './Register';

import { BrowserRouter, Route } from 'react-router-dom';



class App extends Component {
  render() {
    return (

      <Provider store={store}>
        <BrowserRouter>
            <div className="content">
              <Header/>
              <Route exact path='/' component={ AbouteView } />
              <Route path='/apacze' component={ Apacze } />
              <Route path='/komancze' component={ Komancze } />
              <Route path='/czejenowie' component={ Czejenowie } />
              <Route path='/kontakt' component={ KontaktView } />
              <Route path='/prawo' component={ PrawoView } />
              <Route path='/register' component={ Register } />
              <Route path='/signin' component={ Signin } />
            </div>
        </BrowserRouter>
      </Provider>
  
    );
  }
}

export default App;
