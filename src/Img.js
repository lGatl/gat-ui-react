import React, {Component} from "react";

export default class Img extends Component {
	render(){
		return (
			this.props.children?
					<div style = {{
						position:"relative",
						display:"flex",
						alignItems:"center",
						justifyContent:"center",
						textAlign:'center',
						...this.props.style
					}}>
						<img src="/images/image.png" style={{...this.props.im_style}}/>
						<div style={{position:"absolute"}}>
							{this.props.children}	
						</div>				
					</div>:
			<img 
				alt={this.props.alt} 
				style={{flex:1, ...this.props.im_style}} 
				src={this.props.src}
			/>
		);
	}
}

