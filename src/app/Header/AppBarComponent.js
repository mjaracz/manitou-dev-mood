import React, { Component } from 'react';
import Toggle from 'material-ui/Toggle';
import { Link } from 'react-router-dom';


/* <Toggle
  label="zaloguj się"
  labelStyle={{color: 'white'}}
  thumbStyle={{backgroundColor: 'rgba(255, 102, 0)'}}
  trackStyle={{backgroundColor: 'rgba(255, 102, 0, 0.2)'}}
  thumbSwitchedStyle={{backgroundColor: 'rgba(255, 102, 0)'}}
  trackSwitchedStyle={{backgroundColor: 'rgba(255, 102, 0, 0.2)'}}
  onToggle={this.props.onToggle}
/> */

import './AppBar.css';


class AppBarComponent extends Component {
  render() {
    return (
      <div className="header__appbar">
        <li>
          <Link to="/">O Projekcie</Link>
        </li>
        <li>
          <Link to="/manitou">TwórzManitou</Link>
        </li>
        <li>
          <Link to="/kontakt">Kontakt</Link>
        </li>
        <li>
          <Link to="/prawo">Prawa Autorskie</Link>
        </li>        
      </div>
    )
  }
}

export default AppBarComponent;