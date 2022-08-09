import { combineReducers } from 'redux';
import { reducer as firebase } from "react-redux-firebase"
import channelReducer from './reducers/channelReducer';

const reducerRoot = combineReducers({
    firebase,
    channels: channelReducer
});

export default reducerRoot