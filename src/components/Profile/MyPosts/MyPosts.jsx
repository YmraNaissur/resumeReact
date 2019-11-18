import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import { conditionalExpression } from '@babel/types';

const MyPosts = (props) => {

    let postsComponents = props.posts.map(p => {
        return <Post message={p.message} avatar={p.avatar} likeCount={p.likeCount} />
    });

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch({type: 'SAVE_POST'});
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch({type: 'SET_NEW_POST_TEXT', newText: text});
    }

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea ref={newPostElement}
                    onChange={onPostChange} value={props.newPostText} />
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={classes.posts}>
                { postsComponents }
            </div>
        </div>
    )
}

export default MyPosts;