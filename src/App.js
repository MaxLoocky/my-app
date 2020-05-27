import React from 'react';
import './App.css';
import Header from './main/Header';
import Navbar from './main/Navbar';
import Content from './main/Content';
import Footer from './main/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
