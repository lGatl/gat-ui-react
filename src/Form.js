import React, {Component} from "react";
import FormInput from "./Input";
import FormTextArea from "./TextArea";
import FormButton from "./Button";

export default class Form extends Component {
	// static Input = FormInput;
	// static TextArea = FormTextArea;
	// static Button = FormButton;
	emptyFunction(){}
	emptyStyle(){}
	render(){
		return (
			<form 
				style = {{display:"flex",flex:1, ...this.props.style}}
				onSubmit = {this.onSubmit?this.onSubmit.bind(this):emptyFunction.bind(this)}
			>
					{ this.props.children||"" }
			</form>
		);
	}
}

