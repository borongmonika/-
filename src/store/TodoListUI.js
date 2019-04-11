import React, {  } from 'react';

import { Input, Button, List } from 'antd';
const TodolistUI = (props) =>{
    return(
        <div style={{ marginTop: 10 }}>
            <Input 
                value={props.inputValue} 
                placeholder='jojo' 
                style={{ width: 300, marginRight: 10 }}
                onChange={props.handleInputChange} />
            <Button type="primary"
                onClick={props.handleBtnClick}>Rua!</Button>
            <List
                size="small"
                style={{marginTop:10, width:300}}
                bordered
                dataSource={props.list}
                renderItem={(item, index) => (<List.Item onClick={() => {props.handleItemDelete(index)}}>{item}</List.Item>)}
            />
        </div>
    )

}
// class TodolistUI extends Component {
//     render() {
//         return(
//             <div style={{ marginTop: 10 }}>
//             <Input 
//                 value={this.props.inputValue} 
//                 placeholder='jojo' 
//                 style={{ width: 300, marginRight: 10 }}
//                 onChange={this.props.handleInputChange} />
//             <Button type="primary"
//                 onClick={this.props.handleBtnClick}>Rua!</Button>
//             <List
//                 size="small"
//                 style={{marginTop:10, width:300}}
//                 bordered
//                 dataSource={this.props.list}
//                 renderItem={(item, index) => (<List.Item onClick={(index) => {this.props.handleItemDelete(index)}}>{item}</List.Item>)}
//             />
//         </div>
//         )
//     }
// }

export default TodolistUI;