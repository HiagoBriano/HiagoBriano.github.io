import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import IndexPrincipal from './Pages/Principal/IndexPrincipal';
import IndexProjeto12 from './Pages/FrontendOnlineStore/IndexProjeto12';


function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route path="/" exact>
              <IndexPrincipal />
            </Route>

            <Route path="/frontendonlinestore" exact>
              <IndexProjeto12 />
            </Route>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
