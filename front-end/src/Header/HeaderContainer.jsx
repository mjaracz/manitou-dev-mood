import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import AppBarContainer from './AppBar/AppBarContainer';


class HeaderContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      register: false,
    };
  };
  registerClick = () => {
    let { register } = this.state;
    this.setState({ register: !register });
  };
  render() {
    return (
      <div>
        <AppBarContainer registerClick={this.registerClick} />
        {this.state.register
          ? <Redirect push to='/register' />
          : <Redirect push to='/' />}
      </div>
    )
  }
}

export default HeaderContainer;