import React, { Component } from 'react';
import AppBarComponent from './AppBarComponent';
import SideCardComponent from './SideCardComponent';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import { userSignIn } from '../../duck/actions/userActions';

import PropTypes from 'prop-types';

class AppBarContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sideCard: false,
      register: false,
      logo: false
    }

    this.menuClick = this.menuClick.bind(this);
    this.onToggle = this.onToggle.bind(this);
    this.logoClick = this.logoClick.bind(this);
  }

  menuClick(e) {
    this.setState({
      sideCard: !this.state.sideCard
    })
  }

  onToggle() {
    console.log('...')
    this.props.registerClick()
  }


  logoClick() {
    this.setState({
      logo: !this.state.logo
    })
  }

  

  render() {
    return(
      <div>
        <AppBarComponent menuClick={this.menuClick} onToggle={this.props.registerClick} logoClick={this.logoClick}/>
        <SideCardComponent sideCard={this.state.sideCard} menuClick={this.menuClick}/>
        {this.state.logo ? <Redirect push to='/' /> : null}
      </div>
    )
  }
}

AppBarContainer.propTypes = {
  // signin: PropTypes.bool.isRequired,

  // userSignIn: PropTypes.func.isRequired,
  registerClick: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  signin: state.users.signin
})

export default connect(mapStateToProps, { userSignIn })(AppBarContainer);