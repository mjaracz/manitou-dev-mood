import React, { Component } from 'react'


class AddStore extends Component {
  render() {
    return(
      <div 
        className="main__edit" name='text'
        contentEditable={true} onInput={this.props.changeText}
        onBlur={this.props.changeText}
      >
        <p>Po prostu zacznij tutaj pisać w tym miejscu :) miłej zabawy Indianinie</p>
      </div>
    )
  }
}

export default AddStore