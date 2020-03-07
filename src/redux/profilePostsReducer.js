const ADD_POST = "ADD_POST";
const SET_NEW_POST_TEXT = "SET_NEW_POST_TEXT";

let initialState = {
    profilePosts: [
        {
            id: 1,
            message: "Hi, how are you?",
            avatar: "https://avt-9.foto.mail.ru/mail/otmop03b/_avatar180?",
            likeCount: 20
        },
        {
            id: 2,
            message: "Hello! It's my second post :)",
            avatar: "https://ae01.alicdn.com/kf/HTB1e_tdQpXXXXXtXFXXq6xXFXXXN/2x.jpg",
            likeCount: 15
        },
        {
            id: 3,
            message: "О, чуваки, вы все здесь )))",
            avatar: "https://img.discogs.com/pOI-oRHGTxKPLwIsUBEEirj4r4c=/300x300/filters:strip_icc():format(jpeg):quality(40)/discogs-avatars/U-2604026-1464113040.png.jpg",
            likeCount: 4
        }
    ],
    newPostText: "it-kamasutra"
}

const profilePostReducer = (state = initialState, action) => { 
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