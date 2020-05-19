import React from 'react';
import './App.css';
import MainNav from './components/MainNav/MainNav';
import Home from './components/Home/Home';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import MainFooter from './components/MainFooter/MainFooter';
import Blog from './components/Blog/Blog';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <div className="app">
      
     
      <Home/>
       <MainNav/>
       <Skills/>
      <Experience/>
      <Projects/>
      <Blog/>
      <MainFooter/>
    </div>
  );
}

export default App;
