import './App.scss';
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Nav from './components/Nav/Nav';
import Main from './components/Main/Main';
import Detector from './pages/Detector/Detector';
import { useMediaQuery } from "react-responsive";
import NavMobile from "./components/NavMobile/NavMobile";
import { menu } from './utils/menu';

function App() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <BrowserRouter>
      {!isMobile ? <Nav menu={menu} /> : <NavMobile />}
      <Main>
        <Switch>
          <Route exact path="/detector">
            <Detector />
          </Route>
        </Switch>
      </Main>
    </BrowserRouter>
  );
}

export default App;
