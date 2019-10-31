import React from 'react';
import classes from './Post.module.css';

const Post = () => {
    return (
        <div className={classes.item}>
            <img src="https://avt-9.foto.mail.ru/mail/otmop03b/_avatar180?" />
            Post 1
            <br /><span>like</span> 
        </div>
    )
}

export default Post;