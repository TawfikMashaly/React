import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import EgyptNews from './pages/EgyptNews';
import UsNews from './pages/UsNews';
import NotMatch from './components/NotMatch';
import { Routes, Route } from 'react-router-dom';

class App extends Component {
  
  render() { 
    return (
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/egypt" element={<EgyptNews/>} />
          <Route path="/us" element={<UsNews/>} />
          <Route path="*" element={<NotMatch/>} />
        </Routes>

        <Footer />
      </>
    );
  }
}
 
export default App;