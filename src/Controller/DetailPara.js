import React, { Component } from 'react';
import './../App.css';
import ReactHtmlParser from 'react-html-parser';



class DetailPara extends Component {
		constructor(props) {
			super(props)
			
			this.state = {
				surrandnwtxt: ''
			}
		}
	
	
	
	componentDidMount() {
	const startApp = JSON.parse(localStorage.getItem('rgvilla'));
		this.setState({
		surrarea: startApp.surrarea
	  });

	}
	
	
	handleFocus = (event) => {
	  const text = window.getSelection().toString();
	  const key = text;
	  const suuareatxt = this.props.paraavail.surrarea;
	  const newText =  suuareatxt.replace(key, '<mark>'+key+'</mark>' );
	  this.setState({
		  surrandnwtxt : newText
	  })
	  console.log(newText);
	};
	
	recordHandle = () => {
		this.setState({
			surrarea: this.state.surrandnwtxt
		})
		localStorage.setItem('rgvillasurtxt', JSON.stringify(this.state.surrandnwtxt));
		window.location.reload(); 
	}
					
  render() {	
   const html = this.state.surrandnwtxt;
    return (
      <div className="container top-adj">
        <div className="row">
			<div className="col s12 m12">
			  <div className="red-border">
			  { this.state.surrandnwtxt == '' ? <p onMouseUp={this.handleFocus}>{this.props.paraavail.surrarea}</p> : <p>{ReactHtmlParser(html)}</p> }		
				<button onClick={this.recordHandle} className="btn btn-primary">Record</button>
			  </div>
			</div>
		  </div>
      </div>
    );
  }
}

export default DetailPara;










