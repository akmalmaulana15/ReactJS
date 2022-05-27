import React from 'react';
import Navbar from './component/navbar'
import Main from './main'
import Home from './pages/home';
import Contact from './pages/contact';
import About from './pages/about';

export default class App extends React.Component{
  render(){
    return(
      <div>
        <Navbar />
        <Home />
        <About />
        <Contact />
      </div>
    )
  }
}
