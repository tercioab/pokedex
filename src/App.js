import React from "react";
import pokemons from "./data";
import Pokemons2 from "./pokemons2";
import Footer
	from "./footer";
class App extends React.Component {
	constructor() {
		super();
		this.state = {
			tipo: "",
		};
	}

	filtro(tipo) {
		this.setState({ tipo: tipo });
	}

	setFilterValue(event) {
		this.setState({ tipo: event.target.value });
	}
	
	render() {
		const final = pokemons.filter(
			(poke) =>
				poke.type.includes(this.state.tipo) ||
				poke.name.includes(this.state.tipo),
		);
		return (
			<div>
				<h1 className="title">POKEDEX</h1>
				<div className="procura">
					<div className="input-class">
						<input
							type="text"
							placeholder="qual especie/nome?"
							onChange={(event) => this.setFilterValue(event)}
						/>
					</div>
					<div className="buttons">
						<button onClick={(tipo) => this.filtro("Electric")}>Electric</button>
						<button onClick={(tipo) => this.filtro("Fire")}>Fire</button>
						<button onClick={(tipo) => this.filtro("Bug")}>Bug</button>
						<button onClick={(tipo) => this.filtro("Poison")}>Poison</button>
						<button onClick={(tipo) => this.filtro("Psychic")}>Psychic</button>
						<button onClick={(tipo) => this.filtro("Normal")}>Normal</button>
						<button onClick={(tipo) => this.filtro("Dragon")}>Dragon</button>
					</div>
				</div>
				<div className="geral">
					{final.map((teste) => (
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
