import React, { Component } from 'react'
import Link from 'react-router'
import './../App.css'
import ReactHtmlParser from 'react-html-parser';




class Card extends Component {
		constructor(props) {
			super(props)
			
			this.state = {
				highlights: false,
				surrandnwtxt: null
			};
		}
		
		deleteEverything = () => {
			localStorage.removeItem('rgvilla');
			localStorage.removeItem('rgvillasurtxt');
			window.location.reload(); 
		}
		
		handleSurrAreaFocus = () => {
			const text = window.getSelection().toString();
			if(text.split('').length > 0) {
				this.setState({ highlights: false });
			} else {
				this.setState({ highlights: true });
			}
		}
		
		componentDidMount() {
		const newTxtEditted = localStorage.getItem('rgvillasurtxt');
			this.setState({
			surrandnwtxt: newTxtEditted
		  });

		}
		showPara = () => {
			this.props.eventListenerFunc();			
		}
	
  render() {
	const html = this.state.surrandnwtxt;
    return (
      <div className="container top-adj">
        <div className="row">
			<div className="col s12 m12">
			  <div className="card">
				<div className="card-image">
				  <span className="card-title purple-text">{this.props.pagetitle.title}</span>
				  <a className="btn-floating halfway-fab waves-effect waves-light red" onClick={this.deleteEverything}><i className="material-icons closer">add</i></a>
				</div>
				<div className="card-content">
				 <h5 className="purple-text">Villa name</h5>
				 <p>{this.props.pagetitle.villaname}</p>
				 <h5 className="purple-text">Date of visit</h5>
				 <p>{this.props.pagetitle.dateofvisit}</p>
				 <h5 className="purple-text">Pincode</h5>
				 <p>{this.props.pagetitle.pincode}</p>
				 <h5 className="purple-text">Owner's Name</h5>
				 {this.props.pagetitle.ownersname == "" ? <p><em>Not received any input from client</em></p> :  <p>{this.props.pagetitle.ownersname}</p>}
				 <h5 className="purple-text">Surrounding Area</h5>
				 { this.state.surrandnwtxt == null? <p className="surr-area-hightlights" onMouseUp={this.handleSurrAreaFocus}>
				 {this.state.highlights ? <span className="icon-house" onClick={this.showPara}><i className="material-icons">create</i></span> : null}
				 {this.props.pagetitle.surrarea}
				 </p> : <p>{ReactHtmlParser(html)}</p>}
				 <h5 className="purple-text">Construction Quality</h5>
				 <p>{this.props.pagetitle.contquality}</p>
				 <h5 className="purple-text">Villa Decor</h5>
				 <p>{this.props.pagetitle.villadecor}</p>
				</div>
			  </div>
			</div>
		  </div>
      </div>
    );
  }
}

export default Card;
