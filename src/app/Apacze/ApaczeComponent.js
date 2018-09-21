import React, { Component } from 'react';
import './Main.css';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';


class ApaczeComponent extends Component {
  render() {
    return (
      <main>
        <div className="main--grid">
          <h1>Apacze</h1>

          <div className="main__text main__text1">  
            lorem ipsum dkfk dfjnwidcn njsjakakwc
            wita cksl dkfnksl kmdkfnk fkdfkvnkvf
            lorem ipsum dkfk dfjnwidcn njsjakakwc
            wita cksl dkfnksl kmdkfnk fkdfkvnkvf
            lorem ipsum dkfk dfjnwidcn njsjakakwc
            wita cksl dkfnksl kmdkfnk fkdfkvnkvf
            lorem ipsum dkfk dfjnwidcn njsjakakwc
            wita cksl dkfnksl kmdkfnk fkdfkvnkvf
          </div>

          
          <div className="main__userValue">
            <p>
              {this.props.text}
            </p>
          </div>
          <div className="main__userEditable" name="text" contentEditable={true} onInput={this.props.changeTekst} onBlur={this.props.changeTekst}>
            Napisz w tym miejscu coś swojego, jeśli się ośmielisz..
            Pamiętaj żeby skorzystać z pomarańczowego przycisku poniżej, dopiero jak będziesz pewien na sto procent,
            że chcesz dodać swoją część historii. 
          </div>
        
        </div>
        <FloatingActionButton secondary={true} backgroundColor="#ff6600b2"
          disabledColor="#ff6600b2" style={{backgroundColor: "#ff6600b2", marginTop: 25,}} 
          iconStyle={{backgroundColor: "#ff6600b2"}} onClick={this.props.addText}
        >
        <ContentAdd />
        </FloatingActionButton>
      </main>
    )
  }
}

export default ApaczeComponent;