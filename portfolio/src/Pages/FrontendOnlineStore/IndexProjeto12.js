import { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import Principal from './Pages/Principal';

export default class IndexProjeto12 extends Component {
  // componentDidMount() {
  //   localStorage.clear();
  // }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/frontendonlinestore" exact>
            <Principal />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

// se mostrarResultado for verdadeiro mostrar a tela com o resultado, se for falso ele deixa mostrar a tela de detalhes

// criar um botão para limpar a busca e limpar a categoria (antes da listagem da categoria)
