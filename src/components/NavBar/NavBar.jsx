import React from 'react';
import classes from './NavBar.module.css';
import { NavLink } from 'react-router-dom';
import Friends from './Friends/Friends';

console.log(classes);

const NavBar = (props) => {
  return (
    <nav className={classes.nav}>
      <div className={classes.item}>
        <NavLink to="/profile" activeClassName={classes.active}>Profile</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/dialogs" activeClassName={classes.active}>Dialogs</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/news" activeClassName={classes.active}>News</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/music" activeClassName={classes.active}>Music</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/settings" activeClassName={classes.active}>Settings</NavLink>
      </div>
    
      <Friends state={props.state.friends} />
    </nav>
  )
}

export default NavBar;