import React, {Component} from "react";

export default class Titre extends Component {
	render(){
		return (
			<span 
				className = {this.props.className}

				style = {{ 
					margin:0,
					padding:10,
					textAlign:"center",
					...this.props.style
				}}>
				{ this.props.children||"" }
			</span>
		);
	}
}

