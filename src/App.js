import React, { Component } from 'react';
import './App.css';
// We want to add the react router module:
// the main thing we need is BrowserRouter
// we did the below, "browserRouter as Router" so we can call it "router"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import About from './About';
import Home from './Home';
import MovieList from './MovieList';
import Movie from './Movie';

class App extends Component {
  render() {
    const superHero="batman";
    // The ROUTER GOES AROUND EVERYTHING it needs TO CONTROL
    return (
      <Router>
        <div className="App">
          
            {/* In react router, we don't use "<a></a>"  */}
            {/* <li><a href="/">Home</a></li> WE DON"T DO THIS... */}
            <button><Link to = "/">HOME</Link></button>
            <button><Link to = "/about">ABOUT</Link></button>
            <button><Link to = "/movies">MOVIES</Link></button>
        {/* Use the Route component to set up a path match. */}
        {/* if the path matches the brower path, it will render whatever is giben as compnent prop */}
        {/* ROUTE IS SELF CLOSING */}
          {/* IF YOU HAVE A PATH BY ITSELF, IT WILL LOOK FOR THAT PATH IN THE URL.
            TO RESTRICT TO EXACT, 
              USE E X A C T (EXACT) */}
          {/* <Route path="/" component={Home} /> */}        
                      {/* vs.... */}

          <Route exact path="/" render={(props)=>       //THIS IS HOW YOU RENDER A COMPONENT.
            <Home superHero={superHero}/>
          } /> 

          <Route path="/about" component={About} />

          <Route exact path="/movies" component={MovieList} />


          {/* The " : " is used for a wildcard route */}
          <Route path="/movies/:movieId" component={Movie} /> 
        </div>
      </Router>
    );
  }
}

export default App;
