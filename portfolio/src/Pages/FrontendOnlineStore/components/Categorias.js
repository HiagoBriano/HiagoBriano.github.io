import { Component } from "react";
import { listaCategorias } from "../API";
import "../CSS/Categorias.css";
import { resultadoCategoriaPEsquisa } from "../API";

export default class Categorias extends Component {
  constructor() {
    super();

    this.state = {
      resultadoCategoria: [],
      idAtual: "",
    };
  }

  componentDidMount() {
    this.categorias();
  }

  categorias = async () => {
    const dados = await listaCategorias();
    this.setState({ resultadoCategoria: dados });
  };

  atualizaId = async (evento) => {
    evento.preventDefault();
    const { value } = evento.target;

    // guarda o valor do input no local Storage
    localStorage.setItem("idCategory", JSON.stringify(value));
    this.setState({
      idAtual: localStorage.getItem("idCategory").replace(/"/g, ""),
    });

    await resultadoCategoriaPEsquisa();
  };

  render() {
    const { resultadoCategoria, idAtual } = this.state;
    return (
      <div class="list-group tamanho">
        {resultadoCategoria.map(({ id, name }) => (
          <button
            type="button"
            className={
              idAtual === id
                ? "list-group-item list-group-item-action active"
                : "list-group-item list-group-item-action"
            }
            aria-current="true"
            key={id}
            value={id}
            onClick={this.atualizaId}
          >
            {name}
          </button>
        ))}
      </div>
    );
  }
}
