import React from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home";
import Products from "./components/Products/Products";
import About from "./components/About/About";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Details from "./components/Details/Details";
import SendProducts from "./SendProducts/SendProducts";

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/products/4">Details</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/sendproducts">Send products</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/about">
            <About></About>
          </Route>
          <Route exact={true} path="/products">
            <Products></Products>
          </Route>
          <Route path="/products/:id">
            <Details></Details>
          </Route>
          <Route path="/sendproducts">
            <SendProducts />
          </Route>
          <Route exact={true} path="/">
            <Home></Home>
          </Route>
          <Route path="*" component={PageNotFound}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
