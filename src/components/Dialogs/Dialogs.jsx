import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import MessageTextArea from './MessageTextArea/MessageTextArea';

const Dialogs = (props) => {

    let dialogsUsersComponents =
        props.dialogsUsers.map(u => <DialogItem id={u.id} name={u.name} />);
    let dialogsMessagesComponents =
        props.dialogsMessages.map(m => <Message text={m.text} />);

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                { dialogsUsersComponents }
            </div>
            <div className={classes.messages}>
                { dialogsMessagesComponents }
                <MessageTextArea newMessageText={props.newMessageText}
                                    updateMessageText={props.updateMessageText}
                                    sendMessage={props.sendMessage} />
            </div>
        </div>
    )
}

export default Dialogs;