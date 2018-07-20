import React, { Component } from 'react';
import '../style/Main.css';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

class RegisterView extends Component {
  render() {
    return(
      <main className="main__form">  
        <div>
          <TextField
            floatingLabelText="email"
            onChange={this.props.onUpdateInput}
            className="main__input"
            name="Email"
          />
          <TextField
            floatingLabelText="Imie"
            onChange={this.props.onUpdateInput}
            className="main__input"
            name="firstName"
          />
          <TextField
            floatingLabelText="Naziwsko"
            onChange={this.props.onUpdateInput}
            className="main__input"
            name="lastName"
          />
          <TextField
            floatingLabelText="Hasło"
            onChange={this.props.onUpdateInput}
            type="password"
            className="main__input"
            name="password"
          />
          <TextField
            floatingLabelText="Powtórz hasło"
            onChange={this.props.onUpdateInput}
            type="password"
            className="main__input"
            name="RePassword"
          />
          <FlatButton label="Zarejestruj się" backgroundColor="rgb(212, 102, 0)" style={{marginTop: 25}} className="main__button"/>
        </div>
      </main>
    )
  }
}

export default RegisterView;