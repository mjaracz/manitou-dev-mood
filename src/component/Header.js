import React, { Component } from 'react';
import HeaderView from '../view/HeaderView';
import AppBar from './AppBar';


class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flex: false,
      img1: false,
      img2: false,
      img3: false
    }
    this.imgClick = this.imgClick.bind(this);
  }

  imgClick(e) {
    this.scrollTo(e);
    switch(e.target.className) {
      case ("header__img header__img1"): {
        return(
          this.setState({
            flex: true,
            img1: true
          })
        )
      }
      case ("header__img header__img2"): {
        return(
          this.setState({
            flex: true,
            img2: true
          })
        )
      }
      case ("header__img header__img3"): {
        return(
          this.setState({
            flex: true,
            img3: true
          })
        )
      }
      default: {
        this.setState({
          flex: false,
          img1: false,
          img2: false,
          img3: false
        })  
      }      
    } 
  }
  
  scrollTo(e) {
    setTimeout((e) => {
      this.setState({
        flex: false,
        img1: false,
        img2: false,
        img3: false
      })
      window.scrollBy(0, 550)
    }, 830)
  }

  

  render() {
    return (
      <div>
        <HeaderView
          expended={this.state.flex} img1={this.state.img1}
          img2={this.state.img2} img3={this.state.img3} 
          imgClick={this.imgClick}/>
        <AppBar />
      </div>
    )
  }
}

export default Header;