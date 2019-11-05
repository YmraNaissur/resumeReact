import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {

    let dialogsUsersComponents =
        props.users.map(u => <DialogItem id={u.id} name={u.name} />);
    let dialogsMessagesComponents =
        props.messages.map(m => <Message text={m.text} />);

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