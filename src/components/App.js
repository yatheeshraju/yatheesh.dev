import React from 'react';
import MainNav from './MainNav';
import Home from './Home';
import RecentVideos from './RecentVideos';
import RecentProject from './RecentProject';
import MainFooter from './MainFooter';


function App() {
  return (
    <div className="App">
      <MainNav/>
      <Home/>
      <RecentVideos/>
      <RecentProject/>
      <MainFooter/>
    </div>
  );
}

export default App;
