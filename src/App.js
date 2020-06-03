import React from 'react';
import './App.css';
import Header from './main/Header/Header';
import Navbar from './main/Navbar/Navbar';
import Footer from './main/Footer/Footer';
import Profile from './main/Profile/Profile';
import Dialogs from './main/Dialogs/Dialogs';
import { Route, BrowserRouter } from 'react-router-dom';
import Music from './main/Music/Music';
import News from './main/News/News';
import Settings from './main/Settings/Settings';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Navbar />
        <div className="AppContent">
          <Route path="/Profile" component={Profile} />
          <Route path="/Dialogs" component={Dialogs} />
          <Route path="/News" component={News} />
          <Route path="/Music" component={Music} />
          <Route path="/Settings" component={Settings} />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
