import React, { Component } from 'react';

import HeaderContainer from './Header/HeaderContainer';
import AboutComponent from './About/AboutComponent';
import TworzManitou from './Tworz/TworzContainer';
import SigninContainer from './Register/SigninContainer';
import KontaktComponent from './Kontakt/KontaktComponent';
import PrawoComponent from './Prawo/PrawoComponent';
import RegisterContainer from './Register/RegisterContainer';

import { BrowserRouter, Route } from 'react-router-dom';
import MainPageContainer from "./MainPage/MainPageContainer";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path='/' component={ MainPageContainer }/>
          <Route exact path='/' component={ AboutComponent } />

          <HeaderContainer/>
          <Route path='/tworzManitou' component={ TworzManitou } />
          <Route path='/kontakt' component={ KontaktComponent } />
          <Route path='/prawo' component={ PrawoComponent } />
          <Route path='/signin' component={ SigninContainer } />
          <Route path='/register' component={ RegisterContainer } />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
