import React, { Component } from 'react';
import './../App.css';



class Header extends Component {	
	
  render() {
	  var logoName = {
		name: 'VILLA APP'
	};
	
    return (
      <div>
        <nav className="App-header purple darken-3">
          <header className="container">
            <div className="logo">{logoName.name}</div>
          </header>
        </nav>
      </div>
    );
  }
}

export default Header;
