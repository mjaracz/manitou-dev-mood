import React, { Component } from 'react';
import KomanczeView from '../view/KomanczeView';


class Komancze extends Component {
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

  }

  render() {
    return(
      <KomanczeView text={this.state.text} changeTekst={this.changeTekst} />
    )
  }
}

export default Komancze;