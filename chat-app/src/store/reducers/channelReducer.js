import * as types from "../action/types";
const initialState = {
    currentChannel: null,

}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
    switch (action.type) {
        case types.SET_CURRENT_CHANNEL:
            return {
                ...state,
                currentChannel: action.payload
            };
        default:
            return state;
    }
};