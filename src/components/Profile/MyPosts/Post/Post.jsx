import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {

    return (
        <div className={classes.item}>
            <img src={props.avatar} />
            {props.message}
            <br /><span>like</span> {props.likeCount}
        </div>
    )
}

export default Post;