import React, { Component } from 'react';
import Image from '../assets/img4mini.JPG';
import { Link } from 'react-router-dom';
import '../style/Main.css';

class AbouteView extends Component {
  render() {
    return(
      <main>
        <div className="main--grid">
          <h1>O projekcie</h1>
          <figure>
            <img src={Image} alt="autor zdjęcia: Michał Jaracz" className="main__img1" />
            <figcaption className="main__textAuthor">autor zdjęcia: Michał Jaracz</figcaption>
          </figure>
          <div className="main__text main__text1">
            <p>
            Stwórzmy powieść pisaną przez tysiące użytkowników!
            Wybierz jeden z trzech wątków tematycznych.
            Do wyboru są:
            <Link to="/apacze">Apacze</Link><Link to="/komancze">Komancze</Link><Link to="/czejenowie">Czejenowie</Link>
            
            Zdecyduj w jakim plemienu się znajdziesz.
            </p>

            <p>
            Przejdź przez inidiański szałas pokryty jelenią strzechą.
            Zapach ściółki leśnej, głębia oddalonego nocnego nieba i ogrom dwudziesto metrowych drzew docierają do zagubionego umysłu Indianina.
            Nie wiesz gdzie jesteś, co tutaj robisz, orientujesz się w sytuacji, kiedy zauważasz, że jesteś pośrodku gęstej puszczy, będąc członkiem amazońskiego plemienia.
            Zdala od cywilizacji, zdany tylko na siebie i swoją kreatywność.
            </p>
          </div>
        </div>
      </main>
    )
  }
}

export default AbouteView;