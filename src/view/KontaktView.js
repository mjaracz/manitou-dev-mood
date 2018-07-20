import React, { Component } from 'react';
import '../style/Main.css';
import Image from '../assets/img4mini.JPG';

class KontaktView extends Component {
  render() {
    return(
      <main>
        <div className="main--grid">
          <h1>Kontakt</h1>
          <figure>
            <img src={Image} alt="Wspólczesni Indianie, Seatlle, stan WAshington fot. Wikipedia CC 3.0 autor: Joe Mabel" className="main__img1" />
            <figcaption className="main__textAuthor">autor zdjęcia: Michał Jaracz</figcaption>
          </figure>
          <div className="main__text main__text1">

            <p>
            Przejdź przez inidiański szałas pokryty jelenią strzechą...
            </p>
            <p>...i skontaktuj się z nami pod adresem:</p>
            <h2>manitou@gmail.com</h2>
          </div>
        </div>
      </main>
    )
  }
}

export default KontaktView;