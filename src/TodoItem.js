import React, { Component } from 'react';
class TodoItem extends Component {
    handelClick(){
        alert(1)
    }
    render() {
       
        return (
            <div onClick={this.handelClick}>
                {this.props.content}
            </div>
        )
    }
}
export default TodoItem;