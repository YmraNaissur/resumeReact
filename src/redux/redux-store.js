import { createStore, combineReducers } from "redux";
import profilePostsReducer from './profilePostsReducer';
import messagesReducer from './messagesReducer';
import sidebarReducer from './sidebarReducer';

let reducers = combineReducers({
    profile: profilePostsReducer,
    messages: messagesReducer,
    sidebar: sidebarReducer
});

let store = createStore(reducers);

export default store;