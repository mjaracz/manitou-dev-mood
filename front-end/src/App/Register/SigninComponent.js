import React, { Component } from 'react';
import './Register.css';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router-dom';

class SigninComponent extends Component {
  render() {
    return(
      <main className="main__form">  
        <div>
          <TextField
            floatingLabelText="email lub nick"
            onChange={this.props.onUpdateInput}
            className="main__input"
            name="email"
          />
          <TextField
            floatingLabelText="hasło"
            onChange={this.props.onUpdateInput}
            type="password"
            className="main__input"
            name="password"
          />
          <FlatButton label="Zaloguj się" backgroundColor="rgb(212, 102, 0)" style={{marginTop: 25}} className="main__button"/>
          <Link to="/register" >Nie masz konta, załóż tutaj</Link>
        </div>
      </main>
    )
  }
}

export default SigninComponent;