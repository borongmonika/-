import React ,{ Component,Fragment } from "react";

class TodoList extends Component{
  constructor(props){
    super(props);
    this.state = {
      inputValue: '111',
      list: []
    }
  }
  handelInputChange(e) {
    console.log(e.target.value)
  }
  render(){
  
    return(
      <Fragment>
        <input
          value={this.state.inputValue}
          onChange={this.handelInputChange}
        />
        <button>RUA!</button>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </Fragment>
    )
  }
}

export default TodoList;
