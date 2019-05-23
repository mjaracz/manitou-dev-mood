import React from 'react';
import './SideCard.css';
import { Link } from 'react-router-dom';

const SideCardComponent = (props) => {
  return(
    <nav className={!props.sideCard ? "sidebar" : "sidebar sidebar--expanded"}>
      <i className="fa fa-window-close" aria-hidden="true" onClick={props.menuClick}/>
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
    </nav>
  )
};

export default SideCardComponent;
