import React from 'react';
import MainNav from './MainNav';
import Home from './Home';
import MainFooter from './MainFooter';
import About from './About';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Contact from './Contact';
import Blog from './Blog';


function App() {
  return (
   
    <div className="App">
   
      <MainNav/>
      <Router>
      <div className='maincontent'>
      <Switch>
      <Route path="/about">
            <About />
      </Route>
      <Route path="/contact">
            <Contact/>
      </Route>
      <Route path="/blog">
            <Blog/>
      </Route>
      <Route exact path="/">
            <Home/>
      </Route>
      </Switch>
      </div>  
      </Router>
      <MainFooter/>
      
    </div>
    
  );
}

export default App;
