import { Component } from "react";
import CampoPesquisa from "../components/CampoPesquisa";
import Categorias from "../components/Categorias";

export default class Principal extends Component {
  constructor() {
    super();

    this.state = {
      resultadoPesquisa: [],
    };
  }

  render() {
    return (
      <>
        <CampoPesquisa />
        <Categorias />
      </>
    );
  }
}

// se mostrarResultado for verdadeiro mostrar a tela com o resultado, se for falso ele deixa mostrar a tela de detalhes

// criar um botão para limpar a busca e limpar a categoria (antes da listagem da categoria)
