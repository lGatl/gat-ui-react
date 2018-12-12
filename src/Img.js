import React, {Component} from "react";

export default class Img extends Component {
	render(){
		return (
			<img 
				alt={this.props.alt} 
				style={{width: "100%",height: "auto"}} 
				src={this.props.src}
			/>
		);
	}
}

