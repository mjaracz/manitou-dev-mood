import React, { Component } from 'react';
import './Main.css';

class PrawoComponent extends Component {
  render() {
    return(
      <main>
        <div className="main--grid">
          <h1>Autor</h1>
          <div className="main__text main__text1">
            <p>
              Docelowo książka, która zostanie złożona z tekstów użytkowników,
              będzie podpisana imieniem i nazwiskiem podanym przy rejestracji, lub nazwą użytkownika.
              W ten sposób powstanie powieść, której okładką będą podpisy jej autorów (użytkowników aplikacji).
              Pod koniec książki zostanie dołączony wykaz twórców, wraz z ilością znaków, użytych w trakcie korzystania z portalu.
            </p>
          </div>
        </div>
      </main>
    )
  }
}

export default PrawoComponent;