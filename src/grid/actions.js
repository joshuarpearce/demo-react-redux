export const ADD_ROW = 'ADD_ROW';
export const REMOVE_ROW = 'REMOVE_ROW';

export const addRow = value => ({
    type: ADD_ROW,
    value
});

export const removeRow = id => ({
    type: REMOVE_ROW,
    id
});
