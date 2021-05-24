import React, {Component} from "react";

export class Notification extends Component {
	render(){
		return (
			<div
				className = {this.props.className}

				style = {{ 
					margin:5,
					display:"flex",
					alignItems:"center",
					justifyContent:"center",
					textAlign:"center",
					color:"rgba(100,100,100,0.9)",
					width:50,
					height:50,
					fontSize:30,
					borderRadius:10,
					backgroundColor:"rgba(220,220,220,0.7)",
					boxShadow: "2px 1px 1px 1px rgba(177,177,177,0.9)",
					...this.props.style

				}}>
				
				<span>23</span>
			</div>
		);
	}
}

