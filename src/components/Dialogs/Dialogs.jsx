import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {

    let dialogsUsersComponents =
        props.state.dialogsUsers.map(u => <DialogItem id={u.id} name={u.name} />);
    let dialogsMessagesComponents =
        props.state.dialogsMessages.map(m => <Message text={m.text} />);

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