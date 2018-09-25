import React, { Component } from 'react';
import './About.css';

class AboutComponent extends Component {
  render() {
    return(
      <main>
        <h1>O projekcie</h1>
        <div className="main__text main__text1">
          <p>
          Stwórzmy powieść pisaną przez tysiące użytkowników!
          Wybierz jeden z przygotowanych wątków tematycznych.
          
          Zdecyduj w jakim plemienu się znajdziesz.
          </p>

          <p>
          Przejdź przez inidiański szałas pokryty jelenią strzechą.
          Zapach ściółki leśnej, głębia oddalonego nocnego nieba i ogrom dwudziesto metrowych drzew docierają do zagubionego umysłu Indianina.
          Nie wiesz gdzie jesteś, co tutaj robisz, orientujesz się w sytuacji, kiedy zauważasz, że jesteś pośrodku gęstej puszczy, będąc członkiem amazońskiego plemienia.
          Zdala od cywilizacji, zdany tylko na siebie i swoją kreatywność.
          </p>
        </div>
      </main>
    )
  }
}

export default AboutComponent;