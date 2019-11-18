let store = {
    _state: {
        profile: {
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
        },
        messages: {
            dialogsUsers: [
                { id: 1, name: "Козьма Прутков"},
                { id: 2, name: "Александр Корнеев" },
                { id: 3, name: "Юля Коган" },
                { id: 4, name: "Денис Лебедев" },
                { id: 5, name: "Олег Кожевников" },
                { id: 6, name: "Денис Мисуркин" },
            ],
            dialogsMessages: [
                { id: 1, senderId: 1, text: "Привет! Ну как, может пива попьём?" },
                { id: 2, senderId: 7, text: "Вчера замутил прикольный проект." },
                { id: 3, senderId: 1, text: "Круто. А я не знаю, о чем статью написать." },
                { id: 4, senderId: 7, text: "А, ну ясненько." }
            ],
            newMessageText: "все молодцом"
        },
        sidebar: {
            friends: [
                {id: 1, name: "Козьма Прутков", avatar: "http://volga.lutsk.ua/img/news/300_20180111151313.jpg"},
                {id: 5, name: "Олег Кожевников", avatar: "http://i.mycdn.me/image?id=870532907451&t=43&plc=WEB&ts=000000000000bd0539&tkn=*IeG5CP4O2LL7csLtxqaj7sEuLEM"}
            ]
        }
    },

    _callSubscriber(observer) {
        console.log("There is no subscriber.")
    },

    _savePost() {
        let newPost = {
            id: 5,
            message: this._state.profile.newPostText,
            avatar: "http://i.mycdn.me/image?id=870532907451&t=43&plc=WEB&ts=000000000000bd0539&tkn=*IeG5CP4O2LL7csLtxqaj7sEuLEM",
            likeCount: 0
        }
    
        this._state.profile.profilePosts.push(newPost);
        this._state.profile.newPostText = "";
        this._callSubscriber(this._state);
    },

    _setNewPostText(newText) {
        this._state.profile.newPostText = newText;
        this._callSubscriber(this._state);
    },

    _saveMessage() {
        let newMessage = {
            id: 5,
            senderId: 1,
            text: this._state.messages.newMessageText
        }
        this._state.messages.dialogsMessages.push(newMessage);
        this._state.messages.newMessageText = "";
        this._callSubscriber(this._state);
    },

    _setNewMessageText(messageText) {
        this._state.messages.newMessageText = messageText;
        this._callSubscriber(this._state);
    },

    dispatch(action) { // {type: 'SAVE_POST'}
        if (action.type === "SAVE_POST") {
            this._savePost();
        } else if (action.type === "SET_NEW_POST_TEXT") {
            this._setNewPostText(action.newText);
        } else if (action.type === "SAVE_MESSAGE") {
            this._saveMessage();
        } else if (action.type === "SET_NEW_MESSAGE_TEXT") {
            this._setNewMessageText(action.newText);
        }
    },

    getState() {
        return this._state;
    },

    // observer pattern
    subscribe(observer) {
        this._callSubscriber = observer;
    },
}

export default store;
window.store = store; 