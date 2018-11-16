import React, { Component } from 'react';
import logo from './wandering.jpg';
import logo2 from './burger.jpg';
import './App.css';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import {Homepage} from "./Homepage";
import {Artists} from "./Artists";

class App extends Component {
  render() {
      return (<div>
                <Router>
                    <React.Fragment>
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/artists">Artists</Link>
                        <Route path="/about" component={About}/>
                        <Route exact path="/" component={Homepage}/>
                        <Route exact path="/artists" component={Artists}/>
                    </React.Fragment>
                </Router>
              </div>
          );
  }
}
function About() {
  return (
    <div> 
      <h1>Nikhil Goel</h1>
      <img src={logo} alt="Picture of me for the about page" class = "center"></img>
      <React.Fragment>
        <div class ="center">Hi, I'm currently a senior in Informatics!</div>
        <div class ="center">I'm interested in Music, Basketball and Art</div>
        <div class ="center">Some of my favorite artists are: Travis Scott, Young Thug, Juice Wrld</div>
        <div class ="center">Some of my favorite ball players are: Kyrie Irving, Russel Westbrook, Brian Scalabrine</div>
      </React.Fragment>
    </div>
  );
}
export default App;

