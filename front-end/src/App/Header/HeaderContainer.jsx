import React, { Component } from 'react';
import { Redirect } from 'react-router'
import HeaderComponent from './HeaderComponent';
import AppBarContainer from './AppBar/AppBarContainer';


class HeaderContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      register: false,
    }
    this.registerClick = this.registerClick.bind(this);
  }

  registerClick() {
    let register = this.state.register
    if(register) return this.setState({ register: false })
    this.setState({ register: true })
  }
  render() {
    return (
      <div>
        <HeaderComponent />
        <AppBarContainer registerClick={this.registerClick} />
        {/* {this.state.register ? <Redirect push to='/register' /> : <Redirect push to='/' />} */}
      </div>
    )
  }
}

export default HeaderContainer;