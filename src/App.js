import React from 'react';
import { Route } from 'react-router-dom';
import Header from './components/Header/Header';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';

const App = (props) => {
    return (
        <div className="app-wrapper">
            <Header />
            <NavBar store={props.store} />
            <div className="app-wrapper-content">
                <Route path="/profile">
                    <Profile store={props.store} />
                </Route>
                <Route path="/dialogs">
                    <DialogsContainer store={props.store} />
                </Route>
                <Route path="/news" component={News} />
                <Route path="/music" component={Music} />
                <Route path="/settings" component={Settings} />
            </div>
        </div>
    );
}

export default App;