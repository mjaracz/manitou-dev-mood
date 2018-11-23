import React, { Component } from 'react';
import TworzComponent from './TworzComponent';
import { addText } from '../../duck/actions/userActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class TworzContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: 'Dokończ zaczętą historie, to od ciebie zależy jak potoczą się dalsze losy bohaterów.'
    }

  }

  changeText = (e) => {
    this.setState({
      [e.target.getAttribute('name')]: [e.target.innerHTML]
    })
  }

  addText = () => {
    let id = 0;
    let arrText = [
      {
        type: 'Apacze',
        text: `Przykladowy tekst 1`,
        author: 'Michał Jaracz'
      },
      {
        type: 'Apacze',
        text: `Przykaldowy tekst 2`,
        author: 'Michał Jaracz'
      },
      {
        type: 'Apacze',
        text: `Przykaldowy teskt 3`,
        author: 'Michał Jaracz'
      }
    ]
    for(let i=0; i < arrText.length; i++) {
      arrText[i].id = id++
    }

    arrText.push({
      type: `Apacze`,
      text: `${this.state.text}`,
      author: `Michał Jaracz`,
      id: id++
    })

    
    
    this.props.addText(arrText);

  }

  render() {
    return(
      <TworzComponent 
        text={this.state.text}
        changeText={this.changeText}
        addText={this.addText}
      />
    )
  }
}

TworzContainer.propTypes = {
  addText: PropTypes.func.isRequired,
  texts: PropTypes.array.isRequired
}

const mapStateToProps = (state) => ({
  texts: state.users.texts
})

export default connect(mapStateToProps, { addText })(TworzContainer)
