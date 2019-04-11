import React, { Component } from 'react';
import TodolistUI from './store/TodoListUI';
import store from './store/index';
import 'antd/dist/antd.css';
import { getInputChangeAction, getBtnClickAction, getItemDeleteAction, getTodoList  } from './store/actionCreators'
// import axios from 'axios';
class AntTodolist extends Component {

    constructor(props) {
        super(props);
        this.state = store.getState();
        console.log( this.state);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
        store.subscribe(this.handleStoreChange)
    }
    handleStoreChange() {
        this.setState(store.getState());
    }
    handleInputChange(e) {
        // const action = {
        //     type: CHANGE_INPUT_VALUE,
        //     value: e.target.value
        // }
        const action = getInputChangeAction(e.target.value);
        store.dispatch(action);
        console.log(e.target.value);
    }
    handleBtnClick() {
        const action = getBtnClickAction();
        // const action = {
        //     type: ADD_TO_ITEM
        // };
        store.dispatch(action);
    }
    handleItemDelete(index) {
        const action = getItemDeleteAction(index);
        // const action = {
        //     type: DELETE_TODO_ITEM,
        //     index
        // }
        store.dispatch(action);
    }
    componentDidMount() {
        const action = getTodoList();
        store.dispatch(action)
        console.log(action);
        // axios.get('/list.json')
        // .then((res) => {
        //     const data = res.data;
        //     const action = initListAction(data)
        //     store.dispatch(action);})
            
    }
    render() {
        return (
       <TodolistUI
           inputValue={this.state.inputValue}
           list={this.state.list}
           handleInputChange={this.handleInputChange}
           handleBtnClick={this.handleBtnClick}
           handleItemDelete={this.handleItemDelete}


       />
        )

    }
}

export default AntTodolist;