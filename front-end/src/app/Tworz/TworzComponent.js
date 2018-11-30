import React, { Component } from 'react';
import './Tworz.css';

import AddStore from './AddStoreComponent'
import Stories from './Stories/StoriesComponent'



class TworzComponent extends Component {
  render() {
    const { 
      stories,
      changeText,
      text 
    } = this.props
    return (
      <main>
        <Stories 
          stories={stories} 
          text={text}
        />
        <AddStore changeText={changeText}/>
      </main>
    )
  }
}

export default TworzComponent;