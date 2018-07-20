import React, { Component } from 'react';
import AppBarView from '../view/AppBarView';
import SideCardView from '../view/SideCardView';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import { userSignIn } from '../redux/actions/userActions';

import PropTypes from 'prop-types';

class AppBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sideCard: false,
      signin: false,
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
    
    this.props.userSignIn(!this.state.signin);

    console.log(this.props.signin);
  }

  logoClick() {
    this.setState({
      logo: !this.state.logo
    })
  }

  

  render() {
    return(
      <div>
        <AppBarView menuClick={this.menuClick} onToggle={this.onToggle} logoClick={this.logoClick}/>
        <SideCardView sideCard={this.state.sideCard} menuClick={this.menuClick}/>
        {this.props.signin ? <Redirect push to='/signin' /> : null}
        {this.state.logo ? <Redirect push to='/' /> : null}
      </div>
    )
  }
}

AppBar.propTypes = {
  signin: PropTypes.bool.isRequired,

  userSignIn: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  signin: state.users.signin
})

export default connect(mapStateToProps, { userSignIn })(AppBar);