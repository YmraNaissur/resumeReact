import React from 'react';
import { sendMessageActionCreator, setNewMessageTextActionCreator } from '../../redux/messagesReducer'
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
    let dialogsUsers = props.store.getState().messages.dialogsUsers;
    let dialogsMessages = props.store.getState().messages.dialogsMessages;
    let newMessageText = props.store.getState().messages.newMessageText;

    const sendMessage = () => {
        props.store.dispatch(sendMessageActionCreator());
    }
    
    const updateMessageText = (text) => {
        props.store.dispatch(setNewMessageTextActionCreator(text));
    }
    
    return <Dialogs dialogsUsers={dialogsUsers} dialogsMessages={dialogsMessages}
                    sendMessage={sendMessage} updateMessageText={updateMessageText}
                    newMessageText={newMessageText} />
}

export default DialogsContainer;