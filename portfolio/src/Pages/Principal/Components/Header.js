import { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <nav className="barraNavegacao" >
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <Link className="nav-link active" to="/frontendonlinestore">Clique aqui e acesse o projeto Frontend Online Store</Link>
        </li>
      </ul>
    </nav>
    );
  }
}
