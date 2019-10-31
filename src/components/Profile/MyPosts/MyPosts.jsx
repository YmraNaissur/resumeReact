import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
            <textarea></textarea>
            <p>
                <button>Add post</button>
            </p>
            <Post />
            <Post />
        </div>
    )
}

export default MyPosts;