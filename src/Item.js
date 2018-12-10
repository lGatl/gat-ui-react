import React, {Component} from "react";

export default class Item extends Component {
	constructor(){
		super();
		this.state = {hover:false};
	}
	onMouseOver(){
		this.setState({hover:true});
	}
	onMouseOut(){
		this.setState({hover:false});
	}
	emptyfunction(e){}
	//================CSS======================
	style(){
		return{
			s_item:{
				display:"flex",
				alignItems: "center",
				textDecoration:"none",
				color: "inherit",
				width:"auto",
				minHeight: 40,
				paddingLeft:10,
				paddingRight:10,
				cursor:"pointer",
				borderleft: "1px solid rgba(150,150,150,0.5)",
				borderRight: "1px solid rgba(150,150,150,0.5)",
				boxShadow: "1px 1px 1px rgba(150,150,150,0.3)"
			},
		};
	}
	render(){
		let {s_item} = this.style();
		let {style, href, onClick, img, children, hover_style,active, active_style} = this.props;
		hover_style = this.state.hover&&hover_style?hover_style:this.state.hover?{backgroundColor:"rgba(255,255,255,0.5)"}:{};
		active_style = active&&active_style?active_style:active?{backgroundColor:"rgba(0,0,0,0.1)"}:{};
		return (
			<a style={{...s_item, ...style,...hover_style, ...active_style}} 
				href={href?href:"#"} 
				onMouseOver = { this.onMouseOver.bind(this) } 
				onMouseOut={ this.onMouseOut.bind(this) } 
				onClick = {onClick?onClick.bind(this):this.emptyfunction.bind(this)} 
			>
				{img?<img src={img} alt="item" />:children}
			</a>

		);
	}
}

