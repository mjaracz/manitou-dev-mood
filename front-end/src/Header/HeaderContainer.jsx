import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import AppBarContainer from './AppBar/AppBarContainer';
import SideCardComponent from "./SideCard/SideCardComponent";


class HeaderContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      register: false,
      sideCard: false,
      sandwichClick: false
    };
  };
  registerClick = () => {
    let { register } = this.state;
    this.setState({ register: !register });
  };
  render() {
    return (
      <div>
        <AppBarContainer
          registerClick={this.registerClick}
          menuClick={this.menuClick}
        />
        {this.state.register
          ? <Redirect push to='/register' />
          : <Redirect push to='/' />}
        <SideCardComponent
          menuClick={this.menuClick}
          sideCard={this.sideCard}
        />
      </div>
    )
  }
}

export default HeaderContainer;
