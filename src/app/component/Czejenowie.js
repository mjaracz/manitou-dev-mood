import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addText } from '../redux/actions/userActions';
import PropTypes from 'prop-types';

import CzejenowieView from '../view/CzejenowieView';

class Czejenowie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: 'Dokończ zaczętą historie, to od ciebie zależy jak potoczą się dalsze losy bohaterów.'
    }

    this.changeTekst = this.changeTekst.bind(this);
  }

  changeTekst(e) {
    this.setState({
      [e.target.getAttribute('name')]: [e.target.innerHTML]
    })

    console.log(this.state.tekst)
  }

  addText() {

    let arrText = [
      {
        type: 'Czejenowie',
        text: `Przykladowy tekst 1`,
        author: 'Michał Jaracz'
      },
      {
        type: 'Czejenowie',
        text: `Przykaldowy tekst 2`,
        author: 'Michał Jaracz'
      },
      {
        type: 'Czejenowie',
        text: `Przykaldowy teskt 3`,
        author: 'Michał Jaracz'
      }
    ]

    const defaultText = 'Dokończ zaczętą historie, to od ciebie zależy jak potoczą się dalsze losy bohaterów.';


    if(this.state.text !== defaultText) {
      
      arrText.push({
        type: 'Czejenowie',
        text: `${this.state.text}`,
        author: `Michał Jaracz`
      })

      console.log('jupijej dziala, teskt dodany to:', this.props.texts)
      this.props.addText(arrText)
    }


  }

  render() {
    return(
      <CzejenowieView text={this.state.text} changeTekst={this.changeTekst} addText={this.addText} />
    )
  }
}

Czejenowie.propTypes = {
  addText: PropTypes.func.isRequired,

  texts: PropTypes.array.isRequired
}

const mapStateToProps = (state) => ({
  texts: state.users.texts
})

export default connect(mapStateToProps, { addText })(Czejenowie);