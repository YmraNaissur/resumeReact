import React from 'react';
import classes from '../Dialogs.module.css';

const MessageTextArea = (props) => {

    let messageTextArea = React.createRef();

    let sendMessage = () => {
        props.saveMessage();
    }

    const onMessageTextChange = () => {
        const text = messageTextArea.current.value;
        props.setNewMessageText(text);
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