import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import './App.css';
import Nav from "./assets/Nav"
import  Home from './assets/home/Home'
import  About from "./assets/about/About"
import Contact from "./assets/contact/Contact"
const App = () => {
  return (
    <div className="App">
<Router>
 <Nav/>
 <Switch>
  <Route path="/"exact component={Home}/>
  <Route path="/about" component={About}/>
  <Route path="/contact" component={Contact}/>
 </Switch>
</Router>

    </div>
  );
};

export default App; 
