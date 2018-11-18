import React, { Component } from 'react';
import './Tworz.css';
import img from '../assets/mini/img3mini.JPG'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';


class TworzComponent extends Component {
  render() {
    return (
      <main>
        <h1>Apacze</h1>
        <div className="main__text">
          <p>
            lorem ipsum dkfk dfjnwidcn njsjakakwc
            wita cksl dkfnksl kmdkfnk fkdfkvnkvf
            lorem ipsum dkfk dfjnwidcn njsjakakwc
            wita cksl dkfnksl kmdkfnk fkdfkvnkvf
            lorem ipsum dkfk dfjnwidcn njsjakakwc
            wita cksl dkfnksl kmdkfnk fkdfkvnkvf
            lorem ipsum dkfk dfjnwidcn njsjakakwc
            wita cksl dkfnksl kmdkfnk fkdfkvnkvf
          </p>
          <p>
            {this.props.text}
          </p>
        </div>
        <div 
          className="main__edit" name='text'
          contentEditable={true} onInput={this.props.changeTekst}
          onBlur={this.props.changeTekst}
        >
          <p>Po prostu zacznij tutaj pisać w tym miejscu :) miłej zabawy Indianinie</p>
        </div>
      </main>
    )
  }
}

export default TworzComponent;