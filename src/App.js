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
      <div className="main-container">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>

        </Switch>
      </div>

      <Footer />
    </BrowserRouter>
    // <div>
    //   <main className="main-container">hlola</main>
    //   <Home />
    // </div>
    
  )
}

export default App;
