import React, {Component} from 'react';
import 'antd/dist/antd.css';
import {Input, Button, List} from 'antd';
import store from './store/index';

class Todolist1 extends Component {

    constructor(props) {
        super(props);
        this.state = store.getState();
        this.handelonChange = this.handelonChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handerBtnClick = this.handerBtnClick.bind(this);
        store.subscribe(this.handleStoreChange);
    }
    handleStoreChange() {
        this.setState(store.getState());
    }
    handelonChange(e){
        const action = {
            type: 'change_input_value',
            value: e.target.value
        }
        store.dispatch(action);
        console.log(e.target.value);
    }
    handerBtnClick(){
        const action = {
            type: 'add_todo_item',
        }
        store.dispatch(action);
    }
    render() {
        return (
        <div>
            <Input
                style={{
                    width:300, 
                    marginTop:10,
                    marginRight:10}}
                value={this.state.inputValue}
                onChange={this.handelonChange}
            />
            <Button
                onClick={this.handerBtnClick}
            >add</Button>
            <List
                size="small"
                style={{marginTop:10, width:300}}
                bordered
                dataSource={this.state.list}
                renderItem={item => (<List.Item>{item}</List.Item>)}
            />
        </div>
        )
    }
}

export default Todolist1;