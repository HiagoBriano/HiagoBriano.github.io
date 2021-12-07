import { Component  } from "react";
import Header from "./Components/Header";
import Corpo from './Components/Corpo';

export default class IndexPrincipal extends Component {
  render() {
    return (
      <>
        <Header />
        <Corpo />
      </>
  );
  }
}