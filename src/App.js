import React from 'react';
import './App.css';
import Header from './main/Header/Header';
import Navbar from './main/Navbar/Navbar';
import Footer from './main/Footer/Footer';
import Profile from './main/Profile/Profile';

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
