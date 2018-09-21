import React, { Component } from 'react';
import '../style/Header.css';

class HeaderView extends Component {
  render() {
    return (
      <header className={!this.props.expended ? "header": "header header--expanded"}>
        <div className={!this.props.img1 ? "header__img header__img1": "header__img header__img1 header__img--expanded"} onClick={this.props.imgClick}></div>
        <div className={!this.props.img2 ? "header__img header__img2": "header__img header__img2 header__img--expanded"} onClick={this.props.imgClick}></div>
        <div className={!this.props.img3 ? "header__img header__img3": "header__img header__img3 header__img--expanded"} onClick={this.props.imgClick}></div>
      </header>
    )
  }
}

export default HeaderView;