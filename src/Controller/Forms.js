import React, { Component } from 'react';
import './../App.css';




class Forms extends Component {	
		constructor(props) {
			super(props)
			
			this.state = {
				appname: props.formstate.appname,
				title: props.formstate.title,
				newuser: 'false',
				villaname: props.formstate.villaname,
				dateofvisit: props.formstate.dateofvisit,
				pincode: props.formstate.pincode,
				ownersname: props.formstate.ownersname,
				surrarea: props.formstate.surrarea,
				contquality: props.formstate.contquality,
				villadecor: props.formstate.villadecor
			  };
		}
		
		
		
		handleVillaNameChange = (eve) => {
			this.setState({
				villaname: eve.target.value
			});
		}
		handleDateOfVisitChange = (eve) => {
			this.setState({
				dateofvisit: eve.target.value
			});
		}
		handlePincodeChange = (eve) => {
			this.setState({
				pincode: eve.target.value
			});
		}
		handleOwnersNameChange = (eve) => {
			this.setState({
				ownersname: eve.target.value
			});
		}
		handleSurrAreaChange = (eve) => {
			this.setState({
				surrarea: eve.target.value
			});
		}
		handleContQualityChange = (eve) => {
			this.setState({
				contquality: eve.target.value
			});
		}
		handleVillaDecorChange = (eve) => {
			this.setState({
				villadecor: eve.target.value
			});
		}
		
		handleSubmit = (eve) => {
			localStorage.setItem('rgvilla', JSON.stringify(this.state));
			window.location.reload();
			// eve.preventDefault();
		}
	
  render() {
	  return (
      <div className="container">
        <div className="row">
			<form className="col s12" onSubmit={this.handleSubmit}>
			<h1 className="uppercase">{this.state.title}</h1>	
			  <div className="row">
				<div className="input-field col s12 m12">
				  <input id="villa_name" 
				  type="text" 
				  className="validate" 
				  value={this.state.villaname} 
				  onChange={this.handleVillaNameChange} 
				  required/>
				  <label for="villa_name">Name of the villa</label>
				</div>
				<div className="input-field col s6 m6">
				  <input id="date_visit" 
				  type="date"
				  className="validate"
				  value={this.state.dateofvisit} 
				  onChange={this.handleDateOfVisitChange} 
				  required/>
				  <label for="date_visit">Date of Visit</label>
				</div>
				<div className="input-field col s6 m6">
				  <input id="pincode" type="text" 
				  maxlength="6" 
				  minlength="5"
				  pattern= "[0-9]+"
				  className="validate"
				  value={this.state.pincode} 
				  onChange={this.handlePincodeChange} 
				  required/>
				  <label for="pincode">Pincode</label>
				</div>
				<div className="input-field col s6 m6">
				  <input id="owners_name" type="text" 
				  className="validate"
				  value={this.state.ownersname} 
				  onChange={this.handleOwnersNameChange} />
				  <label for="owners_name">Owner's name</label>
				</div>
				<div className="input-field col s12 m12">
				  <textarea id="surr_area" className="materialize-textarea" value={this.state.surrarea} onChange={this.handleSurrAreaChange} required></textarea>
				  <label for="surr_area">Surrounding Area</label>
				</div>
				<div className="input-field col s12 m12">
				  <textarea id="const_quality" className="materialize-textarea" value={this.state.contquality} onChange={this.handleContQualityChange} required></textarea>
				  <label for="const_quality">Construction quality</label>
				</div>
				<div className="input-field col s12 m12">
				  <textarea id="villa_decor" className="materialize-textarea" value={this.state.villadecor} onChange={this.handleVillaDecorChange} required></textarea>
				  <label for="villa_decor">Villa Decor</label>
				</div>
				<div className="input-field col s12 m12">
					<button className="btn waves-effect waves-light btn-large" type="submit" name="action">Save
					  <i className="material-icons right">send</i>
					</button>
				</div>				
			  </div>
			</form>
		</div>
      </div>
    );
  }
}

export default Forms;
