import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postsComponents = props.posts.map(p => {
        return <Post message={p.message} avatar={p.avatar} likeCount={p.likeCount} />
    });

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        alert("text: " + text);
        
        // never do this!!!
        // alert(document.getElementById("new-post").value);
    }

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea ref={newPostElement}></textarea>
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