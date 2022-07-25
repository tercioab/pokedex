import React from "react";

class Imagem extends React.Component{ 
    render() {
        return (
            <img className={this.props.classe} src={this.props.imagem} alt={this.props.textoAlterna} />
        )
    }
}

export default Imagem;
