import React, { Component } from 'react';
import Navbar from './components/Navbar';
import { Routes , Route } from 'react-router-dom';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import Create from './pages/Create';
import Edit from './pages/Edit';
import NotMatch from './components/NotMatch';
import Home from './pages/Home';
import Details from './pages/Details';
 

function App() {
  return (
    <>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create' element={<Create />} />
          <Route path='/:id' element={<Details />} />
          <Route path='/edit/:id' element={<Edit />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<NotMatch />} />
        </Routes>
        <Footer />
    </>
  );
}

export default App;