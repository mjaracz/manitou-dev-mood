import React, { Component } from 'react';
import './Apacze.css';
import img from '../assets/mini/img3mini.JPG'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';


class ApaczeComponent extends Component {
  render() {
    return (
      <main>
        <div className="main--grid">
          <h1>Apacze</h1>
          <div className="main__img main__img1">
          </div>

          <div className="main__text main__text1">
            Cześć podróżnicza: 
            lorem ipsum dkfk dfjnwidcn njsjakakwc
            wita cksl dkfnksl kmdkfnk fkdfkvnkvf
            lorem ipsum dkfk dfjnwidcn njsjakakwc
            wita cksl dkfnksl kmdkfnk fkdfkvnkvf
            lorem ipsum dkfk dfjnwidcn njsjakakwc
            wita cksl dkfnksl kmdkfnk fkdfkvnkvf
            lorem ipsum dkfk dfjnwidcn njsjakakwc
            wita cksl dkfnksl kmdkfnk fkdfkvnkvf
          </div>
        </div>
      </main>
    )
  }
}

export default ApaczeComponent;