import React, {Component} from "react";

export default class Title3 extends Component {
	render(){
		return (
			<h3 
				className = {this.props.className}

				style = {{ 
					margin:0,
					padding:5,
					textAlign:"center",
					...this.props.style
				}}>
				{ this.props.children||"" }
			</h3>
		);
	}
}

