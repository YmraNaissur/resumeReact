import profilePostsReducer from './profilePostsReducer';
import messagesReducer from './messagesReducer';
import sidebarReducer from './sidebarReducer';
import profilePostReducer from './profilePostsReducer';

let store = {
    _state: {
        profile: {
            
        },
        messages: {
            
        },
        sidebar: {
            
        }
    },

    _callSubscriber(observer) {
        console.log("There is no subscriber.")
    },

    dispatch(action) { // {type: 'SAVE_POST'}
        this._state.profile = profilePostReducer(this._state.profile, action);
        this._state.messages = messagesReducer(this._state.messages, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);
    },

    getState() {
        return this._state;
    },

    // observer pattern
    subscribe(observer) {
        this._callSubscriber = observer;
    },
}

export default store;
window.store = store; 