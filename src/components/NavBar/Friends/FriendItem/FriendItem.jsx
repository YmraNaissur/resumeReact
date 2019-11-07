import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './FriendItem.module.css';

const FriednItem = (props) => {
    let path = "/friends/" + props.state.id;
    return (
        <span className={classes.friendItem}>
            <NavLink to={path} activeClassName={classes.active}>
                <img src={props.state.avatar} alt={props.state.name} />
            </NavLink>
        </span>
    )
}

export default FriednItem;