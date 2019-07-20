import React, { Component } from 'react';
import Link from 'react-router';
import './../App.css';

import DetailPara from './DetailPara.js'
import Card from './Card.js'


class DisplayCard extends Component {
		constructor(props) {
			super(props)			
			
			this.state = {
				appname: this.props.pagetitle.appname,
				title: this.props.pagetitle.title,
				newuser: this.props.pagetitle.newuser,
				villaname: this.props.pagetitle.villaname,
				dateofvisit: this.props.pagetitle.dateofvisit,
				pincode: this.props.pagetitle.pincode,
				ownersname: this.props.pagetitle.ownersname,
				surrarea: this.props.pagetitle.surrarea,
				contquality: this.props.pagetitle.contquality,
				villadecor: this.props.pagetitle.villadecor,
				clicked:true
			  };
	
		}
		

		
		clickedfunc = () => {
			this.setState({
				clicked: false
			})
		}
			
  render() {	
    return (
      <div className="container top-adj"> 
		{this.state.clicked ? <Card pagetitle={this.state} eventListenerFunc={this.clickedfunc}></Card> : <DetailPara paraavail={this.state}></DetailPara>}	
	  </div>
    );
  }
}

export default DisplayCard;










