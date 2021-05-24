import React, {Component} from "react";

export class Title5 extends Component {
	render(){
		return (
			<h5 
				className = {this.props.className}

				style = {{ 
					margin:0,
					padding:5,
					textAlign:"center",
					...this.props.style
				}}>
				{ this.props.children||"" }
			</h5>
		);
	}
}

