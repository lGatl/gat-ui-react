import React, {Component} from "react";

export default class Img extends Component {
	render(){
		return (
			this.props.children?
			<div style = {{
				display:"flex",
				flex:1,
				alignItems:"center",
				justifyContent:"center",
				textAlign:'center',
				border: 'none',
				backgroundRepeat:'no-repeat',
				backgroundSize:'cover',
				backgroundPosition:'center center',
				height:'100%',
				padding:'0',
			}}>
				{this.props.children}
			</div>:
			<img 
				alt={this.props.alt} 
				style={{flex:1}} 
				src={this.props.src}
			/>
		);
	}
}

