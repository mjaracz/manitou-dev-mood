import React from 'react';
import downArrow from '../assets/down-arrow.svg';
import SVG from 'react-svg';
import {Link} from "react-router-dom";

const MainPageComponent = (props) => {
  return(
    <div className="mainPage">
      <div className="mainPage--description">
        <p className="mainPage__text">
          Przejdź przez szałas okryty jelenia strzechą.
        </p>
        <p className="mainPage__text">
          Wejdź do świata Indiańskich opowieści.
        </p>
        <SVG onClick={props.onClickArrow} className="mainPage__SVG" src={downArrow} alt="down-arrow"/>
      </div>
      <div className="mainPage--flex">
          <div className="mainPage__img mainPage__img1">
            <Link to="/apacze">
              <h1 className="mainPage__img--text">Apacze</h1>
            </Link>
          </div>
          <div className="mainPage__img mainPage__img2">
            <Link to="/komancze">
              <h1 className="mainPage__img--text mainPage__img--text1">Czejenowie</h1>
            </Link>
          </div>
          <div className="mainPage__img mainPage__img3">
            <Link to="/czejenowie">
              <h1 className="mainPage__img--text">Komancze</h1>
            </Link>
          </div>
      </div>
    </div>
  )
};

export default MainPageComponent;
