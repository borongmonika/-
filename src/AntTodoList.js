import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';
import store from './store/index';

class AntTodolist extends Component {

    constructor(props) {
        super(props);
        this.state = store.getState();
        console.log( this.state);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        store.subscribe(this.handleStoreChange)
    }
    handleStoreChange() {
        this.setState(store.getState());
    }
    handleInputChange(e) {
        const action = {
            type: 'change_input_value',
            value: e.target.value
        }
        store.dispatch(action);
        console.log(e.target.value);
    }
    handleBtnClick() {
        const action = {
            type: 'add_todo_item'
        };
        store.dispatch(action);
    }
    render() {
        return (<div style={{ marginTop: 10 }}>
            <Input 
                value={this.state.inputValue} 
                placeholder='jojo' 
                style={{ width: 300, marginRight: 10 }}
                onChange={this.handleInputChange} />
            <Button type="primary"
                onClick={this.handleBtnClick}>Rua!</Button>
            <List
                size="small"
                style={{marginTop:10, width:300}}
                bordered
                dataSource={this.state.list}
                renderItem={item => (<List.Item>{item}</List.Item>)}
            />
        </div>)

    }
}

export default AntTodolist;