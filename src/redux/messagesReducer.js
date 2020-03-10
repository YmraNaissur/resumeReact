const SAVE_MESSAGE = "SAVE_MESSAGE";
const SET_NEW_MESSAGE_TEXT = "SET_NEW_MESSAGE_TEXT";

let initialState = {
    dialogsUsers: [
        { id: 1, name: "Козьма Прутков"},
        { id: 2, name: "Александр Корнеев" },
        { id: 3, name: "Юля Коган" },
        { id: 4, name: "Денис Лебедев" },
        { id: 5, name: "Олег Кожевников" },
        { id: 6, name: "Денис Мисуркин" },
    ],
    dialogsMessages: [
        { id: 1, senderId: 1, text: "Привет! Ну как, может пива попьём?" },
        { id: 2, senderId: 7, text: "Вчера замутил прикольный проект." },
        { id: 3, senderId: 1, text: "Круто. А я не знаю, о чем статью написать." },
        { id: 4, senderId: 7, text: "А, ну ясненько." }
    ],
    newMessageText: "все молодцом"
}

const messagesReducer = (state = initialState, action) => {
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
    debugger;
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