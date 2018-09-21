import React, { Component } from 'react';
import './SideCard.css';
import { Link } from 'react-router-dom';

class SideCardComponent extends Component {
  render() {
    return(
      <div className={!this.props.sideCard ? "sidebar" : "sidebar sidebar--expanded"}>
        <i className="fa fa-window-close" aria-hidden="true" onClick={this.props.menuClick}></i>
        <li>
          <Link to="/">O Projekcie</Link>
        </li>
        <li>
          <Link to="/apacze">Apacze</Link>
        </li>
        <li>
          <Link to="/komancze">Komancze</Link>
        </li>
        <li>
          <Link to="/czejenowie">Czejenowie</Link>
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

export default SideCardComponent;