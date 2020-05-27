import React from 'react';
import './App.css';
import Header from './main/Header';
import Navbar from './main/Navbar';
import Content from './main/Profile';
import Footer from './main/Footer';
import Profile from './main/Profile';

function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar />
      <Profile />
      <Footer />
    </div>
  );
}

export default App;
