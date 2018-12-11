import React, {Component} from "react";

export default class Menu extends Component {
	constructor(){
		super()
		this.state = {
			show: false
		}
		this.setWrapperRef = this.setWrapperRef.bind(this);           
		this.handleClickOutside = this.handleClickOutside.bind(this);
		
	}
	style(){
		return{
			s_container:{
				flex:1,
				display:"flex",
				overflow:"hidden",
				flexDirection:this.props.row ? "row" : "column",
				border: "1px solid rgba(150,150,150,0.5)",
				alignItems:"strecth",

			},
			mobile:{
				position:"fixed",
				zIndex:9999,
				left:this.props.right?"auto":this.state.show?0:-500,
				right:this.props.right?this.state.show?0:-500:"auto",
				transitionDuration: "1s"
			}
		};
	}
		componentDidMount() {
		document.addEventListener('mousedown', this.handleClickOutside);
		document.addEventListener('touchstart', this.handleClickOutside);
	}

	componentWillUnmount() {
		document.removeEventListener('mousedown', this.handleClickOutside);
		document.addEventListener('touchstart', this.handleClickOutside);
	}
	setWrapperRef(node) {
		this.wrapperRef = node;
	}
	handleClickOutside(event) {
		if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
			this.setState({show:false});
		}else{}
	}
	clickCarre(){
		this.setState({show: !this.state.show})
	}
	box(){
		return(
			<div 
			onClick={this.clickCarre.bind(this)}
			style={{
				display: this.props.mobile?"flex":"none",
				borderRadius:10,
				boxShadow: "1px 1px 1px rgba(150,150,150,0.5)",
				height:40,
				width:40,
				padding:10,
				flexDirection:"column",
				...this.props.style_box
			}}>
				<div style={{borderBottom:"solid 2px black", flex:1}}></div>
				<div style={{borderBottom:"solid 2px black", flex:1}}></div>
				<div style={{borderBottom:"solid 2px black", flex:1}}></div>
				<div style={{flex:1}}></div>
			</div>
			)
	}
	render(){
		let {s_container, mobile} = this.style();
		mobile = this.props.mobile?mobile:{}
		return (
			<div className = {this.props.className} style={{display:"flex", flexDirection:"column", flex:1 }}>
				{this.box()}
				<div ref={this.setWrapperRef} style={{...s_container,...this.props.style,...mobile}}>
					{this.props.children}
				</div>

			</div>
			
		);
	}
}

