import { rerenderEntireTree } from "../render";

let state = {
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
        ]
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
        ]
    },
    sidebar: {
        friends: [
            {id: 1, name: "Козьма Прутков", avatar: "http://volga.lutsk.ua/img/news/300_20180111151313.jpg"},
            {id: 5, name: "Олег Кожевников", avatar: "http://i.mycdn.me/image?id=870532907451&t=43&plc=WEB&ts=000000000000bd0539&tkn=*IeG5CP4O2LL7csLtxqaj7sEuLEM"}
        ]
    }
}

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        avatar: "http://i.mycdn.me/image?id=870532907451&t=43&plc=WEB&ts=000000000000bd0539&tkn=*IeG5CP4O2LL7csLtxqaj7sEuLEM",
        likeCount: 0
    }

    state.profile.profilePosts.push(newPost);
    rerenderEntireTree(state);
}

export let sendMessage = (messageText) => {
    debugger;
    let newMessage = {
        id: 5,
        senderId: 1,
        text: messageText
    }

    state.messages.dialogsMessages.push(newMessage);
    rerenderEntireTree(state);
}

export default state;