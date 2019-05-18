import React, {Component} from 'react';
import animatedScrollTo from 'animated-scroll-to'
import MainPageComponent from './MainPageComponent'


import './MainPageFlex.css';
import './MainPageDescription.css';


class MainPageContainer extends Component {
  onClickArrow = () => {
    console.log('scroll');
    const windowHeight = window.innerHeight;
    const options = {
      minDuration: 800
    };
    animatedScrollTo(windowHeight, options);
  };
  render() {
    return <MainPageComponent onClickArrow={this.onClickArrow}/>
  }
}

export default MainPageContainer;