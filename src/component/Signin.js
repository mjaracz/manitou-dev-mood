import React, { Component } from 'react';
import SigninView from '../view/SigninView';

class Signin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataSource: []
    }

    this.onUpdateInput = this.onUpdateInput.bind(this);
  }

  onUpdateInput(e) {
    console.log(e.target.value)
  }

  render(){
    return (
      <SigninView onUpdateInput={this.onUpdateInput}/>
    )
  }
}

export default Signin;