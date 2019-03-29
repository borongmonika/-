import React, { Component, Fragment } from "react";
import TodoItem from './TodoItem';
class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      list: []
    }
    this.handelInputChange = this.handelInputChange.bind(this)
    this.handelBtnClick = this.handelBtnClick.bind(this)
    this.handelItemDelete = this.handelItemDelete.bind(this)
  }
  handelInputChange(e) {
    const value = e.target.value;
    this.setState(() =>({
        inputValue: value
      }))
    // this.setState({
    //   inputValue: e.target.value
    // })
  }
  handelBtnClick() {
    //prevState = this.state
    this.setState((prevState) => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: ''
    }))
    // this.setState(() => ({
    //   list: [...this.state.list, this.state.inputValue],
    //   inputValue: ''
    // }))
    // this.setState({
    //   list: [...this.state.list, this.state.inputValue],
    //   inputValue: ''
    // })
    console.log('添加成功:' + this.state.inputValue)
  }
  handelItemDelete(index) {
    // const list = [...this.state.list];
    // list.splice(index, 1);
    // this.setState({
    //   list: list
    // })
    this.setState((prevState) =>{
      const list = [...prevState.list];
      list.splice(index, 1);
      return {list}
    })
    console.log('删除成功')
  }
  getTodoItem(){
    return this.state.list.map((item, index) => {
      return (
        <div key={index}>
        {/* key值写在最外层 */}
          <TodoItem 
            // key={index}
            content={item}
            index={index}
            deleteItem={this.handelItemDelete}
          />
          {/* <li key={index}
        onClick={this.handelItemDelete.bind(this, index)}
        dangerouslySetInnerHTML={{__html: item}}
        >
        </li> */}
        </div>
      )
    })
  }
  render() {

    return (
      <Fragment>
        <div>
          <label htmlFor='insertArea'>输入：</label>
          <input
            id='insertArea'
            value={this.state.inputValue}
            onChange={this.handelInputChange}
          />
          <button onClick={this.handelBtnClick}>RUA!</button>
        </div>
        <ul>
         {this.getTodoItem()}
        </ul>
      </Fragment>
    )
  }
}

export default TodoList;
