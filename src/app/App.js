import React, { Component } from 'react';

import store from '../duck/store';
import { Provider } from 'react-redux';

import HeaderContainer from './Header/HeaderContainer';
import AboutComponent from './About/AboutComponent';
import ApaczeContainer from './Apacze/ApaczeContainer';
// import Komancze from './Komancze';
// import Czejenowie from './Czejenowie';
// import Signin from './Signin';
// import KontaktView from '../view/KontaktView';
// import PrawoView from '../view/PrawoView';
import RegisterContainer from './Register/RegisterContainer';

import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (

      <Provider store={store}>
        <BrowserRouter>
            <div className="content">
              <HeaderContainer/>
              <Route exact path='/' component={ AboutComponent } />
              <Route path='/apacze' component={ ApaczeContainer } />
              {/* 
              <Route path='/komancze' component={ Komancze } />
              <Route path='/czejenowie' component={ Czejenowie } />
              <Route path='/kontakt' component={ KontaktView } />
              <Route path='/prawo' component={ PrawoView } />
            <Route path='/signin' component={ Signin } /> */}
            <Route path='/register' component={ RegisterContainer } />
            </div>
        </BrowserRouter>
      </Provider>
  
    );
  }
}

export default App;
