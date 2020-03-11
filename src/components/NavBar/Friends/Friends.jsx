import React from 'react';
import classes from './Friends.module.css';
import FriendItem from './FriendItem/FriendItem';

const Friends = (props) => {
    let friends = props.state.sidebar.friends.map(f => <FriendItem state={f} />);
    return (
        <div className={classes.friends}>
            <div className={classes.friendsLabel}>
                Friends.
            </div>
            <div>
                { friends }
            </div>
        </div>
    )
}

export default Friends;