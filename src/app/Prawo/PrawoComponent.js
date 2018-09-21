import React, { Component } from 'react';
import Image from '../assets/o_Projekcie.JPG';
import './Main.css';

class PrawoComponent extends Component {
  render() {
    return(
      <main>
        <div className="main--grid">
          <h1>Autor</h1>
          <figure>
            <img src={Image} alt="Wspólczesni Indianie, Seatlle, stan WAshington fot. Wikipedia CC 3.0 autor: Joe Mabel" className="main__img1" />
            <figcaption className="main__textAuthor">Wspólczesni Indianie, Seatlle, stan WAshington fot. Wikipedia CC 3.0 autor: Joe Mabel</figcaption>
          </figure>
          <div className="main__text main__text1">
            <p>
              Zgodnie z ustawą o Prawach Autorskich, docelowa książka, która zostanie złożona z tekstów użytkowników,
              będzie podpisana imieniem i nazwiskiem podanym przy rejestracji, lub nickiem (tutaj opcja do wyboru).
              W ten sposób powstanie powieść, które okładką będą podpisy jej autorów (użytkoników aplikacji).
              Pod koniec książki zostanie dołączony wykaz autorów, z dopisaną ilością znaków, użytych przy twórczej działalności poszczególnych osób.
            </p>
          </div>
        </div>
      </main>
    )
  }
}

export default PrawoComponent;