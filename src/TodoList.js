import React, { Component, Fragment } from "react";
import TodoItem from './TodoItem';
class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      list: []
    }
  }
  handelInputChange(e) {
    this.setState({
      inputValue: e.target.value
    })
  }
  handelBtnClick() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
    console.log('添加成功')
  }
  handelItemDelete(index) {
    const list = [...this.state.list];
    list.splice(index, 1);
    this.setState({
      list: list
    })
    console.log('删除成功')

  }
  render() {

    return (
      <Fragment>
      <div>
        <label htmlFor='insertArea'>输入：</label>
        <input
          id='insertArea'
          value={this.state.inputValue}
          onChange={this.handelInputChange.bind(this)}
        />
        <button onClick={this.handelBtnClick.bind(this)}>RUA!</button>
      </div>
        <ul>
          {
            this.state.list.map((item, index) => {
              return (
                <div>
                <TodoItem content={item}/>
                {/* <li key={index}
                onClick={this.handelItemDelete.bind(this, index)}
                dangerouslySetInnerHTML={{__html: item}}
                >
                </li> */}
                </div>
              )
            })
          }
        </ul>
      </Fragment>
    )
  }
}

export default TodoList;
