import React, { Component } from 'react'

class PreviousStore extends Component {
  render() {
    return(
      <div className="main__text">
        <h1>Apacze</h1>
          <p>
            {this.props.text}
          </p>
      </div>
    )
  }
}

export default PreviousStore