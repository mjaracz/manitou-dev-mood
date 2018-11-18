import React, { Component } from 'react';
import Toggle from 'material-ui/Toggle';
import { Link } from 'react-router-dom';


import './AppBar.css';


class AppBarComponent extends Component {
  render() {
    return (
      <div className={this.props.sticky ? "header__appbar header__appbar--sticky" : "header__appbar"}>
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
      </div>
    )
  }
}

export default AppBarComponent;