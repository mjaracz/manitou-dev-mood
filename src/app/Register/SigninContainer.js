import React, { Component } from 'react';
import SigninComponent from './SigninComponent';

class SigninContainer extends Component {
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
      <SigninComponent onUpdateInput={this.onUpdateInput}/>
    )
  }
}

export default SigninContainer;