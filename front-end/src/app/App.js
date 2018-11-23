import React, { Component } from 'react';

import store from '../duck/store';
import { Provider } from 'react-redux';

import HeaderContainer from './Header/HeaderContainer';
import AboutComponent from './About/AboutComponent';
import TworzManitou from './Tworz/TworzContainer';
import SigninContainer from './Register/SigninContainer';
import KontaktComponent from './Kontakt/KontaktComponent';
import PrawoComponent from './Prawo/PrawoComponent';
import RegisterContainer from './Register/RegisterContainer';

import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
            <div>
              <HeaderContainer/>
              <Route exact path='/' component={ AboutComponent } />
              <Route path='/tworzManitou' component={ TworzManitou } />
              <Route path='/kontakt' component={ KontaktComponent } />
              <Route path='/prawo' component={ PrawoComponent } />
              <Route path='/signin' component={ SigninContainer } />
              <Route path='/register' component={ RegisterContainer } />
            </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
