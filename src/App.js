import React from "react";
import pokemons from "./data";
import Pokemons2 from "./pokemons2";

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			tipo: "",
		};

		this.eletric = this.eletric.bind(this);
		this.fire = this.fire.bind(this);
		this.bug = this.bug.bind(this);
		this.poison = this.poison.bind(this);
		this.psychic = this.psychic.bind(this);
		this.normal = this.normal.bind(this);
		this.dragon = this.dragon.bind(this);
	}

	eletric() {
		this.setState({ tipo: "Electric" });
	}

	fire() {
		this.setState({ tipo: "Fire" });
	}

	bug() {
		this.setState({ tipo: "Bug" });
	}

	poison() {
		this.setState({ tipo: "Poison" });
	}

	psychic() {
		this.setState({ tipo: "Psychic" });
	}

	normal() {
		this.setState({ tipo: "Normal" });
	}

	dragon() {
		this.setState({ tipo: "Dragon" });
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
						<button onClick={this.eletric}>Electric</button>
						<button onClick={this.fire}>Fire</button>
						<button onClick={this.bug}>Bug</button>
						<button onClick={this.poison}>Poison</button>
						<button onClick={this.psychic}>Psychic</button>
						<button onClick={this.normal}>Normal</button>
						<button onClick={this.dragon}>Dragon</button>
					</div>
				</div>

				<div className="geral">
					{final.map((teste) => (
						<Pokemons2 infos={teste} key={teste.id} />
					))}
				</div>
			</div>
		);
	}
}
export default App;
