import React, {Component} from "react";

export default class Img extends Component {
	render(){
		return (
			<img 
				alt={this.props.alt} 
				style={{width: "100%",height: "auto",...this.props.style}} 
				src={this.props.src}
			/>
		);
	}
}

