import React, {Component} from "react";

export default class Title4 extends Component {
	render(){
		return (
			<h4 
				className = {this.props.className}

				style = {{ 
					margin:0,
					padding:5,
					textAlign:"center",
					...this.props.style
				}}>
				{ this.props.children||"" }
			</h4>
		);
	}
}

