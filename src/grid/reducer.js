import * as actions from './actions';

const INITIAL_STATE = {
    rows: [
        {
            id: 1,
            value: 'test'
        }
    ]
};

let lastId = 1;

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case actions.ADD_ROW:
            lastId++;
            return {
                ...state,
                rows: [
                    ...state.rows,
                    {
                        id: lastId,
                        value: action.value
                    }
                ]
            };
        case actions.REMOVE_ROW:
            return {
                ...state,
                rows: state.rows.filter(r => r.id !== action.id)
            };
        default:
            return state;
    }
};
