import { Component } from 'react';
import CampoPesquisa from '../components/CampoPesquisa';
import Categorias from '../components/Categorias';
import Resultados from '../components/Resultados';
import { resultadoCategoriaPEsquisa } from '../API';
import '../CSS/Principal.css';

export default class Principal extends Component {
  constructor() {
    super();

    this.state = {
      resultadoPesquisa: [],
      categoriaAtual: '',
    };
  }

  // pega o resultado da pesquisa
  pesquisa = async () => {
    const resultado = await resultadoCategoriaPEsquisa();

    this.setState({
      resultadoPesquisa: resultado.results,
    });

    this.setState({
      categoriaAtual: localStorage.getItem('idCategory').replace(/"/g, ''),
    });
  };

  render() {
    const { resultadoPesquisa, categoriaAtual } = this.state;
    return (
      <>
        <CampoPesquisa pesquisa={this.pesquisa} />
        <div className="ladoPrincipal">
          <Categorias
            pesquisa={this.pesquisa}
            categoriaAtual={categoriaAtual}
          />
          <Resultados resultadoPesquisa={resultadoPesquisa} />
        </div>
      </>
    );
  }
}
