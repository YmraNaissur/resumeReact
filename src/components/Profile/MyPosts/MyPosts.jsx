import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postsComponents = props.data.map(p => {
        return <Post message={p.message} avatar={p.avatar} likeCount={p.likeCount} />
    });

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add post</button>
            </div>
            <div className={classes.posts}>
                { postsComponents }
            </div>
        </div>
    )
}

export default MyPosts;