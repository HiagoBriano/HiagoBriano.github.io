import { Component } from 'react';
import '../CSS/Resultados.css';

export default class Resultados extends Component {
  render() {
    const { resultadoPesquisa } = this.props;
    return (
      <div className="lado">
        {resultadoPesquisa.map(({ title, price, thumbnail }) => (
          <div className="card cardResultados">
            <img
              src={`${thumbnail}`}
              class="card-img-top"
              alt={`${title}`}
              height="200px"
            />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{`R$ ${price.toFixed(2)}`}</p>
              <button type="button" class="btn btn-success">
                Adicionar ao carrinho
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
