import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './pages/Home'
import BarNav from "./components/BarNav";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";

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
          <Route path="/contact">
            <Contact />
          </Route>

        </Switch>
      </main>

      <Footer />
    </BrowserRouter>
  )
}

export default App;
