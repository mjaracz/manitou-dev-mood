import React, { Component } from 'react';
import './Header.css';

class HeaderComponent extends Component {
  render() {
    return (
      <header className="header">
        <div className="header__flex header__flex1">
          <div className="header__img header__img1" ></div>
          <div className="header__img header__img2" ></div>
          <div className="header__img header__img3" ></div>
        </div>
        <div className="header__flex header__flex2">
          <div className="header__img header__img4" ></div>
          <div className="header__img header__img5" ></div>
          <div className="header__img header__img6" ></div>
        </div>
      </header>
    )
  }
}

export default HeaderComponent;