import React from 'react';
import { sendMessageActionCreator, setNewMessageTextActionCreator } from '../../redux/messagesReducer'
import Dialogs from './Dialogs';
import storeContext from '../../storeContext';

const DialogsContainer = (props) => {    
    return (
        <storeContext.Consumer>
            {
                store => {
                    let dialogsUsers = store.getState().messages.dialogsUsers;
                    let dialogsMessages = store.getState().messages.dialogsMessages;
                    let newMessageText = store.getState().messages.newMessageText;

                    const sendMessage = () => {
                        store.dispatch(sendMessageActionCreator());
                    }
                    
                    const updateMessageText = (text) => {
                        store.dispatch(setNewMessageTextActionCreator(text));
                    }

                    return (
                        <Dialogs dialogsUsers={dialogsUsers}
                                dialogsMessages={dialogsMessages}
                                sendMessage={sendMessage}
                                updateMessageText={updateMessageText}
                                newMessageText={newMessageText} />
                    )
                }   
            }
        </storeContext.Consumer>
    )
    
    
}

export default DialogsContainer;