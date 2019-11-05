import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let dialogsUsers = [
    { id: 1, name: "Козьма Прутков" },
    { id: 2, name: "Александр Корнеев" },
    { id: 3, name: "Юля Коган" },
    { id: 4, name: "Денис Лебедев" },
    { id: 5, name: "Олег Кожевников" },
    { id: 6, name: "Денис Мисуркин" },
];

let dialogsMessages = [
    { id: 1, senderId: 1, text: "Привет! Ну как, может пива попьём?" },
    { id: 2, senderId: 7, text: "Вчера замутил прикольный проект." },
    { id: 3, senderId: 1, text: "Круто. А я не знаю, о чем статью написать." },
    { id: 4, senderId: 7, text: "А, ну ясненько." }
];

let profilePosts = [
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
  ];

ReactDOM.render(<App dialogsUsers={dialogsUsers}
                    dialogsMessages={dialogsMessages}
                    profilePosts={profilePosts} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
