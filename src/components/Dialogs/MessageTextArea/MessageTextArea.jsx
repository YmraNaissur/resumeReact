import React from 'react';
import classes from '../Dialogs.module.css';

const MessageTextArea = (props) => {

    let messageTextArea = React.createRef();

    let sendMessage = () => {
        debugger;
        let text = messageTextArea.current.value;
        messageTextArea.current.value = "";
        props.sendMessage(text);
    }

    return (
        <div className={classes.textArea}>
            <div>
                <textarea ref={messageTextArea}></textarea>
            </div>
            <div>
                <button onClick={sendMessage}>Send Message</button>
            </div>
        </div>
    )
}

export default MessageTextArea;