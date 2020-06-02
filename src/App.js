import React from 'react';
import './App.css';
import Header from './main/Header/Header';
import Navbar from './main/Navbar/Navbar';
import Footer from './main/Footer/Footer';
import Profile from './main/Profile/Profile';
import Dialogs from './main/Dialogs/Dialogs';

function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar />
      <div className="AppContent">
        <Dialogs />
        {/* <Profile /> */}
      </div>
      <Footer />
    </div>
  );
}

export default App;
