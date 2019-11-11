import React from 'react';
import { Route } from 'react-router-dom';
import Header from './components/Header/Header';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

const App = (props) => {
    return (
        <div className="app-wrapper">
            <Header />
            <NavBar state={props.state.sidebar} />
            <div className="app-wrapper-content">
                <Route path="/profile">
                    <Profile state={props.state.profile} />
                </Route>
                <Route path="/dialogs">
                    <Dialogs state={props.state.messages} />
                </Route>
                <Route path="/news" component={News} />
                <Route path="/music" component={Music} />
                <Route path="/settings" component={Settings} />
            </div>
        </div>
    );
}

export default App;