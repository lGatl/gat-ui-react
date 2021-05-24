import React, {Component} from "react";

export class A extends Component {
	render(){
		return (
			<a href={this.props.href} draggable={this.props.draggable} style={{
				textDecoration:"none",
				color:"black",
				fontWeight:500,
				...this.props.style
			}}>
				{this.props.children}
			</a>
		);
	}
}

