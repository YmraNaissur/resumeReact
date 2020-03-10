import React from 'react';
import { addPostActionCreator, updatePostTextActionCreator } from '../../../redux/profilePostsReducer';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {
    let state = props.store.getState();
    let posts = state.profile.profilePosts;
    let newPostText = state.profile.newPostText;

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    let updatePost = (text) => {
        props.store.dispatch(updatePostTextActionCreator(text));
    }

    return <MyPosts updatePostText={updatePost} addPost={addPost}
                    posts={posts} newPostText={newPostText} />
}

export default MyPostsContainer;