import { CHANGE_INPUT_VALUE, ADD_TO_ITEM, DELETE_TODO_ITEM, INIT_LIST_ACTION } from './actionTypes'
// import { stat } from 'fs';
const defaultState = {
    inputValue:'伍迪',
    list:[  ]
}
// reducer 可以接收state,但是绝不能修改state
export default (state = defaultState, action) => {

    if (action.type === CHANGE_INPUT_VALUE) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }
    if (action.type === ADD_TO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue = '';
        console.log(newState)
        return newState;
    }
    if (action.type === DELETE_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index, 1)
        return newState;
    }
    if(action.type === INIT_LIST_ACTION) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list = action.data;
        return newState
    }
    console.log(state, action);
    return state;
}