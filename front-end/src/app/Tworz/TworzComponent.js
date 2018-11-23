import React, { Component } from 'react';
import './Tworz.css';

import AddStore from './AddStore/AddStoreComponent'
import PreviousStore from './PreviousStore/PreviousStoreComponent'

class TworzComponent extends Component {
  render() {
    return (
      <main>
        <PreviousStore text={this.props.text}/>
        <AddStore changeText={this.props.changeText}/>
      </main>
    )
  }
}

export default TworzComponent;