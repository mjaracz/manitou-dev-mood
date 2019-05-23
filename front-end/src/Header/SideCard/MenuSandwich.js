import React from 'react';
import './MenuSandwich.css';

const MenuSandwich = (props) => {
  const className = props.sandwichClick ? `appbar__sandwich appbar__sandwich--extended` : `appbar__sandwich`;

  return (
    <div className={className} onClick={(e) => props.menuClick(e)}>
      <div className="sandwich__item sandwich__item0"/>
      <div className="sandwich__item sandwich__item1"/>
      <div className="sandwich__item sandwich__item2 "/>
    </div>
  )
};

export default MenuSandwich;
