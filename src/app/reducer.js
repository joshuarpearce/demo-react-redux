import * as actions from './actions';

const INITIAL_STATE = {
    user: 'No user'
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case actions.SET_USER_NAME:
            return {
                ...state,
                user: action.user
            }
        default:
            return state;
    }
};
