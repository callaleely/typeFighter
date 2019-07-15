import { RECEIVE_USERS } from '../actions/user_actions';

const usersReducer = (state={}, action) => {
    // debugger;
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_USERS:
            return Object.assign({}, state, action.users)
        default:
            return state;
    }
};

export default usersReducer;