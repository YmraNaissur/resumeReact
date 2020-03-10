import React from 'react';
import classes from '../Dialogs.module.css';

const MessageTextArea = (props) => {

    let messageTextArea = React.createRef();

    const onSendMessage = () => {
        props.sendMessage();
    }

    const onMessageTextChange = () => {
        props.updateMessageText(messageTextArea.current.value);
    }

    return (
        <div className={classes.textArea}>
            <div>
                <textarea ref={messageTextArea} value={props.newMessageText}
                    onChange={onMessageTextChange} />
            </div>
            <div>
                <button onClick={onSendMessage}>Send Message</button>
            </div>
        </div>
    )
}

export default MessageTextArea;