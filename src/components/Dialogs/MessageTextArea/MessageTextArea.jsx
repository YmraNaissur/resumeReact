import React from 'react';
import classes from '../Dialogs.module.css';
import { sendMessageActionCreator, setNewMessageTextActionCreator } from '../../../redux/store';

const MessageTextArea = (props) => {

    let messageTextArea = React.createRef();

    const sendMessage = () => {
        props.dispatch(sendMessageActionCreator());
    }

    const onMessageTextChange = () => {
        props.dispatch(setNewMessageTextActionCreator(messageTextArea.current.value));
    }

    return (
        <div className={classes.textArea}>
            <div>
                <textarea ref={messageTextArea} value={props.messageText}
                    onChange={onMessageTextChange} />
            </div>
            <div>
                <button onClick={sendMessage}>Send Message</button>
            </div>
        </div>
    )
}

export default MessageTextArea;