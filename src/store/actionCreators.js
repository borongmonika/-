import { CHANGE_INPUT_VALUE, ADD_TO_ITEM, DELETE_TODO_ITEM } from './actionTypes'

export const getInputChangeAction = (value) =>({
    type: CHANGE_INPUT_VALUE,
    value
});
export const getBtnClickAction = () => ({
    type: ADD_TO_ITEM
});
export const getItemDeleteAction= (index) =>({
    type: DELETE_TODO_ITEM,
    index
})