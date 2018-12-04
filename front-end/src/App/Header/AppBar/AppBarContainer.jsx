import React, { Component } from 'react';
import AppBarComponent from './AppBarComponent';
import SideCardComponent from '../SideCard/SideCardComponent';
import { Redirect } from 'react-router';


class AppBarContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sideCard: false,
      register: false,
      logo: false,
      sticky: false
    }
  }

  menuClick = (e) => {
    this.setState({
      sideCard: !this.state.sideCard
    })
  }

  onToggle = () => {
    console.log('...')
  }


  logoClick = () => {
    this.setState({
      logo: !this.state.logo
    })
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll)
  }
  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    let height = window.innerHeight
    let scrollY = window.scrollY
    if(scrollY >= height) {
      this.setState({
        sticky: true
      })
    }
    else {
      this.setState({
        sticky: false
      })
    }
  }

  render() {
    const {
      menuClick,
      logoClick,
      onToggle 
    } = this
    
    const { 
      sticky,
      sideCard 
    } = this.state

    return(
      <div>
        <AppBarComponent 
          menuClick={menuClick} onToggle={onToggle}
          logoClick={logoClick} sticky={sticky}
        />
        <SideCardComponent
          sideCard={sideCard}
          menuClick={menuClick}
        />
        {this.state.logo ? <Redirect push to='/' /> : null}
      </div>
    )
  }
}


export default AppBarContainer