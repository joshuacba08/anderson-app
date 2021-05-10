import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './pages/Home'
import BarNav from "./components/BarNav";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Error404 from "./pages/Error404";
import Blog from "./pages/Blog";
import History from "./pages/History";

import './App.css';

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

          <Route path="/blog">
            <Blog />
          </Route>

          <Route path="/history">
            <History />
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
