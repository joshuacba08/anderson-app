import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './pages/Home'
import BarNav from "./components/BarNav";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";

import './App.css';
import Error404 from "./pages/Error404";



function App() {
  return (
    <BrowserRouter>
      <BarNav />
      <main className="main-container">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>

          <Route path="*">
            <Error404 />
          </Route>

        </Switch>
      </main>

      <Footer />
    </BrowserRouter>
  )
}

export default App;
