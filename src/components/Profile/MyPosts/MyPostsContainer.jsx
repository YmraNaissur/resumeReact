import React from 'react';
import { addPostActionCreator, updatePostTextActionCreator } from '../../../redux/profilePostsReducer';
import MyPosts from './MyPosts';
import storeContext from '../../../storeContext';

const MyPostsContainer = (props) => {
    return (
        <storeContext.Consumer>
            {
                store => {
                    let state = store.getState();
                    let posts = state.profile.profilePosts;
                    let newPostText = state.profile.newPostText;

                    let addPost = () => {
                        store.dispatch(addPostActionCreator());
                    }
                
                    let updatePost = (text) => {
                        store.dispatch(updatePostTextActionCreator(text));
                    }

                    return (
                        <MyPosts updatePostText={updatePost}
                            addPost={addPost}
                            posts={posts}
                            newPostText={newPostText} />
                    )
                }
            }
        </storeContext.Consumer>
    )
}

export default MyPostsContainer;