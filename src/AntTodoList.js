import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';


const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
];

class AntTodolist extends Component {
    render() {
        return (<div style={{ marginTop: 10 }}>
            <Input placeholder='jojo' style={{ width: 300, marginRight: 10 }} />
            <Button type="primary">Rua!</Button>
            <List
                size="small"
                style={{marginTop:10, width:300}}
                bordered
                dataSource={data}
                renderItem={item => (<List.Item>{item}</List.Item>)}
            />
        </div>)

    }
}

export default AntTodolist;