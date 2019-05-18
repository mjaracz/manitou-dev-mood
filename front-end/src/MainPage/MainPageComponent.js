import React from 'react';
import downArrow from '../assets/down-arrow.svg';
import SVG from 'react-svg';

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
        <div className="mainPage__img mainPage__img1" />
        <div className="mainPage__img mainPage__img2" />
        <div className="mainPage__img mainPage__img3" />
      </div>
    </div>
  )
};

export default MainPageComponent;