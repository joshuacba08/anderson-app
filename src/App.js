import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './pages/Home'

import './App.css';
import BarNav from "./components/BarNav";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <BarNav />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>

      <Footer />
    </BrowserRouter>
  )
}

export default App;
