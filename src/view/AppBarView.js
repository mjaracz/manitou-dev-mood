import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Toggle from 'material-ui/Toggle';


class AppBarView extends Component {
  render() {
    return (
      <AppBar
        title="Manitou"
        onTitleClick={this.props.logoClick}
        onLeftIconButtonClick={this.props.menuClick}
        className="header__bar"
        iconElementRight={
          <div className="header__toggle">
            <Toggle
              label="zaloguj się"
              labelStyle={{color: 'white'}}
              thumbStyle={{backgroundColor: 'rgba(255, 102, 0)'}}
              trackStyle={{backgroundColor: 'rgba(255, 102, 0, 0.2)'}}
              thumbSwitchedStyle={{backgroundColor: 'rgba(255, 102, 0)'}}
              trackSwitchedStyle={{backgroundColor: 'rgba(255, 102, 0, 0.2)'}}
              onToggle={this.props.onToggle}
            />
          </div>
        }
      />
    )
  }
}

export default AppBarView;