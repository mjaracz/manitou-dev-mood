import React, { Component } from 'react';
import AppBarComponent from './AppBarComponent';
import SideCardComponent from '../SideCard/SideCardComponent';
import { Redirect } from 'react-router-dom';


class AppBarContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      register: false,
      logo: false,
      sticky: false,
      windowHeight: 0,
      sandwichClick: false,
      sideCard: false
    }
  };

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll)
  };
  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll)
  };

  menuClick = (e) => {
    const {
      sideCard,
      sandwichClick
    } = this.state;
    this.setState({
      sandwichClick: !sandwichClick,
      sideCard: !sideCard
    });
  };
  logoClick = () => {
    this.setState({
      logo: !this.state.logo
    })
  };

  handleScroll = () => {
    let height = window.innerHeight;
    let scrollY = window.scrollY;
    let windowWidth = window.innerWidth;
    this.setState({
      windowWidth: windowWidth
    });
    if(scrollY > height + 100) {
      this.setState({
        sticky: true,
      })
    }
    else {
      this.setState({
        sticky: false
      })
    }
  };

  render() {
    const { 
      sticky,
      sideCard,
      windowWidth,
      sandwichClick
    } = this.state;
    return(
      <div>
        <AppBarComponent
          logoClick={this.logoClick}
          menuClick={this.menuClick}
          windowWidth={windowWidth}
          sandwichClick={sandwichClick}
          sticky={sticky}
        />
        <SideCardComponent
          sideCard={sideCard}
          menuClick={this.menuClick}
        />
        {this.state.logo ? <Redirect push to='/' /> : null}
      </div>
    )
  }
}

export default AppBarContainer;
