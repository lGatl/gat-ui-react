import React, {Component} from "react";

export class Titre extends Component {
	render(){
		return (
			<span 
				className = {this.props.className}

				style = {{
			    display: "block",
			    fontSize: "2em",
			    marginBlockStart: "0.67em",
			    marginBlockEnd: "0.67em",
			    marginInlineStart: "0px",
			    marginInlineEnd: "0px",
			    fontWeight: "bold",
			    ...this.props.style
			}}>
				{ this.props.children||"" }
			</span>
		);
	}
}

