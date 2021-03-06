import React, {Component} from "react";

export class Title2 extends Component {
	render(){
		return (
			<h2 
				className = {this.props.className}

				style = {{ 
					margin:0,
					padding:5,
					textAlign:"center",
					...this.props.style
				}}>
				{ this.props.children||"" }
			</h2>
		);
	}
}

