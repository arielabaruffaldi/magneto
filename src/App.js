import { Route, Switch, BrowserRouter } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import Nav from './components/Nav/Nav';
import Main from './components/Main/Main';

import NavMobile from "./components/NavMobile/NavMobile";
import { menu } from './utils/menu';

import Detector from './pages/Detector/Detector';
import Cargar from './pages/Cargar/Cargar';

import './App.scss';
import Mutantes from "./pages/Mutantes/Mutantes";

function App() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <BrowserRouter>
      {!isMobile ? <Nav menu={menu} /> : <NavMobile menu={menu} />}
      <Main>
        <Switch>
          <Route exact path="/detector">
            <Detector />
          </Route>
          <Route exact path="/cargar">
            <Cargar />
          </Route>
          <Route exact path="/mutantes">
            <Mutantes />
          </Route>
        </Switch>
      </Main>
    </BrowserRouter>
  );
}

export default App;
