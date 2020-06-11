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

function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Navbar />
        <div className="AppContent">
          <Route path="/Profile" render={ () => 
              <Profile 
                  ProfilePage={props.State.ProfilePage} 
                  newPostText={props.State.ProfilePage.newPostText} 
                  dispatch={props.dispatch}  
              />} />
          <Route path="/Dialogs" render={ () => 
              <Dialogs 
                  State={props.State.DialogsPage} 
                  newMessageText={props.State.DialogsPage.newMessageText}
                  addMessage={props.addMessage} 
                  updateNewMessageText={props.updateNewMessageText} 
              />} />
          <Route path="/News" render={ () => <News />} />
          <Route path="/Music" render={ () => <Music />} />
          <Route path="/Settings" render={ () => <Settings />} />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
