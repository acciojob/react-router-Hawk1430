import { BrowserRouter, Switch, Route, Link } from "react-router-dom/cjs/react-router-dom.min";
import React from "react";
import './../styles/App.css';
import HomePage from "./HomePage";
import About from "./About";

const App = () => {
  return (
    <BrowserRouter>
      <Link to='/'>Home</Link>
      <br/>
      <Link to='/about'>About</Link>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/about' component={About} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
