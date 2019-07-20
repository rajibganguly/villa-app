import React, { Component } from 'react';
import './App.css';
import Header from './Controller/Header';
import Forms from './Controller/Forms';
import DisplayCard from './Controller/DisplayCard';


class App extends Component {
	constructor() {
    super();
	
	// const startApp = JSON.parse(localStorage.getItem('rgvilla'));

	
    this.state = {
		appname: 'Villa App',
		title: 'Villa App Review',
		newuser: '',
		villaname: '',
		dateofvisit: '',
		pincode: '',
		ownersname: '',
		surrarea: '',
		contquality: '',
		villadecor: ''
	  };
	}
	
	componentDidMount() {
	const startApp = JSON.parse(localStorage.getItem('rgvilla'));
	if(startApp == null) {
		this.setState({
		appname: '',
		title: '',
		newuser: '',
		villaname: '',
		dateofvisit: '',
		pincode: '',
		ownersname: '',
		surrarea: '',
		contquality: '',
		villadecor: ''
	  });
	}
	else if(startApp.newuser) {
		this.setState({
		appname: startApp.appname,
		title: startApp.title,
		newuser: 'false',
		villaname: startApp.villaname,
		dateofvisit: startApp.dateofvisit,
		pincode: startApp.pincode,
		ownersname: startApp.ownersname,
		surrarea: startApp.surrarea,
		contquality: startApp.contquality,
		villadecor: startApp.villadecor
	  });
	}
	else {}
	  //const rememberMe = ;
	  //const newuser = rememberMe ? localStorage.getItem('newuser') : '';
	  //this.setState({ newuser, rememberMe });
	}
  
	datecapture = (event) => {
		console.log(event.target.value);
	}
	
  render() {	
    return (
      <div className="App">
        <Header></Header>				
		{this.state.newuser === '' ? <Forms formstate={this.state}></Forms> : <DisplayCard pagetitle={this.state}></DisplayCard>}
		
      </div>
    );
  }
}

export default App;
