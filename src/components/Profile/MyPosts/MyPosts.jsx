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
            <Post message="Hello, how are you?"
                avatar="https://avt-9.foto.mail.ru/mail/otmop03b/_avatar180?"
                likeCount="20" />
            <Post message="Hello! It's my first post :)"
                avatar="https://ae01.alicdn.com/kf/HTB1e_tdQpXXXXXtXFXXq6xXFXXXN/2x.jpg"
                likeCount="15" />
        </div>
    )
}

export default MyPosts;