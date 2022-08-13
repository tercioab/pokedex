import React from "react";
import pokemons from "./data";
import Pokemons2 from "./pokemons2";
import Footer from "./footer";
class App extends React.Component {
	constructor() {
		super();
		this.state = {
			tipo: "",
		};
	}

	filtro = (tipoPokemon) => {
		this.setState({ tipo: tipoPokemon });
	}

	teste = ({target}) => {
		this.setState({ tipo: target.name });
	}

	limpar() {
		this.setState({ tipo: "" });
	}

	setFilterValue(event) {
		this.setState({ tipo: event.target.value });
	}

	// upperCase = () => {
	// 	const pokeLower = pokemons.map((pokes) => pokes.toLowerCase())
	// 	const pokerUp = pokemons.map((pokes) => pokes.toUpperCase())
		
	// }


 
	render() {
		const final = pokemons.filter((poke) => 
				poke.type.includes(this.state.tipo) ||
				poke.name.includes(this.state.tipo),
		);
		const  namesButton = ["Electric", "Fire", "Bug", "Poison", "Psychic", "Normal", "Dragon"]
		return (
			<div>
				<h1 className="title">POKEDEX</h1>
				<div className="procura">
					<div className="input-class">
						<input
							className="inputText"
							type="text"
							placeholder="qual especie/nome?"
							onChange={(event) => this.setFilterValue(event)}
						/>
					</div>

					<div className="buttons">
						<button className="clearButton" onClick={(tipo) => this.filtro("")}>LIMPAR</button>
						{namesButton.map((names) => <button onClick={(tipo) => this.filtro(names)}>{ names }</button>)}
					</div>
				</div>
				<div className="geral">
					{
						final.map((teste) => (
						<Pokemons2 infos={teste} key={teste.id} />
					))}
				</div>
				<Footer />
			</div>
			// footer-classe
		);
	}
}
export default App;
