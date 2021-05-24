
import React, {Component} from 'react'
import { Segment } from "../../_common/4_dumbComponent/_gat_ui_react";	//j'importe l'outil Segment de sementic-ui-react

//je cree le composent "Footer" qui est en fait une classe javascript
//On dit a cette classe d'heriter, donc de prendre toutes les fonctionnalitées de Component
//On ne se pose pas de question il faut le faire a chaque fois
export class Footer extends Component {
	//on pourrait preparer des variables ou meme un constructeur avant render





	render(){//cette fonction est obligatoint pour un composent react
		//on peut faire des calculs ici ils vont se realiser des qu'il faut actualiser, ... ils doivent donc etre legers
		//Dans return, on doit mettre du jsx,
		//les commentaires html ne fonctionnent pas
		//les commentaires js nomplu sauf si on fait ca

		return (


			<footer style={{...this.props.style}}>
				<Segment style ={{marginTop:10, height:50, color:"rgba(255,255,255,0.7)", backgroundColor:"red", alignItems:"center", justifyContent:"center"}} >
					<span>
						dévellopé par lGatl.fr
					</span>
				</Segment>
			</footer>

		);
	}
}
