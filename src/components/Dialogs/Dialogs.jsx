import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
    let dialogsUsers = [
        { id: 1, name: "Козьма Прутков" },
        { id: 2, name: "Александр Корнеев" },
        { id: 3, name: "Юля Абашева" },
        { id: 4, name: "Денис Лебедев" },
        { id: 5, name: "Олег Кожевников" },
        { id: 6, name: "Денис Мисуркин" },
    ];

    let dialogsMessages = [
        { id: 1, senderId: 1, text: "Привет! Ну как, может пива попьём?" },
        { id: 2, senderId: 7, text: "Вчера замутил прикольный проект." },
        { id: 3, senderId: 1, text: "Круто. А я не знаю, о чем статью написать." },
        { id: 4, senderId: 7, text: "А, ну ясно." }
    ];

    let dialogsUsersComponents = dialogsUsers.map(u => <DialogItem id={u.id} name={u.name} />);
    let dialogsMessagesComponents = dialogsMessages.map(m => <Message text={m.text} />);

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                { dialogsUsersComponents }
            </div>
            <div className={classes.messages}>
                { dialogsMessagesComponents }
            </div>
        </div>
    )
}

export default Dialogs;