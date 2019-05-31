import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import MenuSandwich from '../SideCard/MenuSandwich';

import './AppBar.css';


class AppBarComponent extends Component {
  render() {
    const {
      sticky,
      windowWidth,
      sandwichClick,
      menuClick
    } = this.props;
    return (
      <nav className={sticky || windowWidth < 1224 ? "header__appbar header__appbar--sticky" : "header__appbar"}>
        <MediaQuery query="(max-width: 1224px)">
          <MenuSandwich
            menuClick={menuClick}
            sandwichClick={sandwichClick}
          />
        </MediaQuery>
        <li>
          <Link to="/" className="appbar__item">O Projekcie</Link>
        </li>
        <li>
          <Link to="/tworzManitou" className="appbar__item">TwórzManitou</Link>
        </li>
        <li>
          <Link to="/kontakt" className="appbar__item">Kontakt</Link>
        </li>
        <li>
          <Link to="/prawo" className="appbar__item">Prawa Autorskie</Link>
        </li>
        <li>
          <Link to="/signin" className="appbar__item">Zaloguj się</Link>
        </li>
      </nav>
    )
  }
}

export default AppBarComponent;
