import React, { Component } from 'react';
import ApaczeComponent from './ApaczeComponent';
import { addText } from '../../duck/actions/userActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class ApaczeContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: 'Dokończ zaczętą historie, to od ciebie zależy jak potoczą się dalsze losy bohaterów.'
    }

    this.changeTekst = this.changeTekst.bind(this);
    this.addText = this.addText.bind(this);
  }

  changeTekst(e) {
    this.setState({
      [e.target.getAttribute('name')]: [e.target.innerHTML]
    })
  }

  addText() {
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

    arrText.push({
      type: `Apacze`,
      text: `${this.state.text}`,
      author: `Michał Jaracz`
    })

    
    
    this.props.addText(arrText);

  }

  render() {
    return(
      <ApaczeComponent text={this.state.text} changeTekst={this.changeTekst} addText={this.addText} />
    )
  }
}

ApaczeContainer.propTypes = {
  addText: PropTypes.func.isRequired,
  texts: PropTypes.array.isRequired
}

const mapStateToProps = (state) => ({
  texts: state.users.texts
})

export default connect(mapStateToProps, { addText } ) (ApaczeContainer);