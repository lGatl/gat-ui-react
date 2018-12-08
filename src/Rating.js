import React, {Component} from "react";

export default class Rating extends Component {
	constructor(){
		super();
		this.state = {temp:0};
	}
	style(){
		return {
			full:{
				color:"yellow",
				textShadow: "1px 1px 2px grey",
			},
			empty:{
				color:"grey",
				textShadow: "1px 1px 2px grey",
			},
			over:{
				color:"orange",
				textShadow: "1px 1px 2px grey",
			}
		};
	}
	over(a){
		this.setState({temp:a});
	}
	out(){
		this.setState({temp:0});
	}
	click(e){
		let {name, onChange, rating} = this.props;
		onChange(e,{name:name,rating:this.state.temp==rating?0:this.state.temp})
	}
	render(){
		let { full, empty, over } = this.style();
		let { rating } = this.props;
		let { temp } = this.state;
		rating = rating == undefined?0:rating;
		return (
			<div style = {{userSelect:"none",display:"flex",fontSize:40,...this.props.style}}>
				<div style = {{userSelect:"none",display:"flex", cursor:this.props.onChange?"pointer":"default"}} onClick = {this.click.bind(this)}>
					{[1,2,3,4,5].map(nb=><div style = {{userSelect:"none"}} key={nb} 
						onMouseOut={this.props.onChange?this.out.bind(this):()=>{}} 
						onMouseOver={this.props.onChange?this.over.bind(this,nb):()=>{}} 
						style = {temp>(nb-.5)?over:rating>(nb-.5)?full:empty}>★</div>)}
				</div>
			</div>
		);
	}
}

//★
//☆
