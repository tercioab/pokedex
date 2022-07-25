import React from "react";
import Imagem from "./Imagem";

class Pokemons2 extends React.Component {
	render() {
		const { name, averageWeight, type, image, moreInfo, id } = this.props.infos;
		return (
			//  className = 'Geral'
			<div className="subgeral">
				<Imagem classe="imagem" imagem={image} textoAlterna="pokemons" />
				<div className="infos">
					<div className="sub-info">
						<p className="id">{id}</p>
						<p className="nome">{name}</p>
						<div className="type-weight">
							<p className="type">{type}</p>
							<p className="wight">
								{averageWeight.value}
								{averageWeight.measurementUnit}
							</p>
						</div>

						<div className="more-info">
							<a href={moreInfo}>MAIS INFORMAÇÕES</a>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Pokemons2;
