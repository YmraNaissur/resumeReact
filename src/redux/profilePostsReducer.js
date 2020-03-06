const ADD_POST = "ADD_POST";
const SET_NEW_POST_TEXT = "SET_NEW_POST_TEXT";

const profilePostReducer = (state, action) => {
    switch(action.type) {
        case ADD_POST:
            _savePost(state);
            return state;
        case SET_NEW_POST_TEXT:
            _setNewPostText(state, action.newText);
            return state;
        default:
            return state;
    }
}

const _savePost = (state) => {
    let newPost = {
        id: 5,
        message: state.newPostText,
        avatar: "http://i.mycdn.me/image?id=870532907451&t=43&plc=WEB&ts=000000000000bd0539&tkn=*IeG5CP4O2LL7csLtxqaj7sEuLEM",
        likeCount: 0
    }

    state.profilePosts.push(newPost);
    state.newPostText = "";
}

const _setNewPostText = (state, newText) => {
    state.newPostText = newText;
}

export const addPostActionCreator = () => ({type: ADD_POST });

export const updatePostTextActionCreator = (text) => ({
    type: SET_NEW_POST_TEXT,
    newText: text
});

export default profilePostReducer;