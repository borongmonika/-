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
  // //在组件即将被挂载到页面时自动执行componentWillMount
  // componentWillMount() {
  //   console.log('componentWillMount')
  // }
  // //在组件被挂载到页面时自动执行componentDidMount
  // componentDidMount() {
  //   console.log('componentDidMount')
  // }
  // //componetWillMount--render--componetDidMount
  // //组件被更新之前，会自动更新shouldComponentUpdate，返回值为boolean 继续执行:不执行
  // shouldComponentUpdate() {
  //   console.log('shouldComponentUpdate')
  //   return true;
  // }
  // //组件被更新之前，会自动更新componentWillUpdate,在shouldComponetUpdate后执行
  // //如果shouldComponentUpdate返回true执行componentWillUpdate
  // //返回false则componentWillUpdate不执行
  // componentWillUpdate() {
  //   console.log('componentWillUpdate')
  // }
  // //组件更新之后，执行componentDidUpdate
  // componentDidUpdate() {
  //   console.log('componentDidUpdate')
  // }
 
  handelBtnClick() {
    //prevState = this.state
    this.setState((prevState) => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: ''
    })
    // ,() =>{
    //   console.log(this.ul.querySelectorAll('div').length);
    // }
    )
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
    // console.log('render')
    return (
      <Fragment>
        <div>
          <label htmlFor='insertArea'>输入：</label>
          <input
            id='insertArea'
            value={this.state.inputValue}
            onChange={this.handelInputChange}
            // ref={(input)=>{this.input = input}}
          />
          <button onClick={this.handelBtnClick}>RUA!</button>
        </div>
        <ul 
        // ref={(ul) => {this.ul = ul}}
        >
         {this.getTodoItem()}
        </ul>
      </Fragment>
    )
  }
}

export default TodoList;
