const SAVE_MESSAGE = "SAVE_MESSAGE";
const SET_NEW_MESSAGE_TEXT = "SET_NEW_MESSAGE_TEXT";

const messagesReducer = (state, action) => {
    switch (action.type) {
        case SAVE_MESSAGE:
            _saveMessage(state);
            return state;
        case SET_NEW_MESSAGE_TEXT:
            _setNewMessageText(state, action.newText);
            return state;
        default:
            return state;
    }
}

const _saveMessage = (state) => {
    let newMessage = {
        id: 5,
        senderId: 1,
        text: state.newMessageText
    }
    state.dialogsMessages.push(newMessage);
    state.newMessageText = "";
}

const _setNewMessageText = (state, messageText) => {
    state.newMessageText = messageText;
}

export const sendMessageActionCreator = () => ({type: SAVE_MESSAGE});

export const setNewMessageTextActionCreator = (text) => ({
    type: SET_NEW_MESSAGE_TEXT,
    newText: text
});

export default messagesReducer;