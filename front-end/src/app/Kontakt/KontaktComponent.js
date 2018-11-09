import React, { Component } from 'react';
import './Main.css';

class KontaktComponent extends Component {
  render() {
    return(
      <main>
        <div className="main--grid">
          <h1>Kontakt</h1>
          <div className="main__text main__text1">

            <p>
            Przejdź przez inidiański szałas pokryty jelenią strzechą...
            </p>
            <p>...i skontaktuj się z nami pod adresem:</p>
            <h2>przyklad@manitou.io</h2>
          </div>
        </div>
      </main>
    )
  }
}

export default KontaktComponent;