import React, { Component } from 'react';
import PropTypes from 'prop-types';
class TodoItem extends Component {
	constructor(props) {
		super(props);
		this.handelClick = this.handelClick.bind(this);
	}
	handelClick() {
		const { deleteItem,index } = this.props;
		deleteItem(index);
		// this.props.deleteItem(this.props.index);
		alert(this.props.content)
	}
	// //当一个组件从父组件接收参数
	// //只要父组件render被重新执行，子组件componentWillReceiveProps会被执行
	// //如果这个组件第一次存在于父组件中，不会执行
	// //如果这个组件之前已经存在于父组件中，才会执行
	// componentWillReceiveProps() {
	// 	console.log('componentWillReceiveProps')
	//   }
	// //当组件即将被从页面中卸载时，执行componentWillUnmount  
	// componentWillUnmount() {
	// 	console.log('componentWillUnmount')
	// }
	render() {
		// console.log('child render')
		console.log('wrrr')
		const { content
			// ,test
		 } = this.props;
		return (	
			<li
				onClick={this.handelClick}>
				{/* {test} -  */}
				{content}
			</li>
		)
	}
}
TodoItem.propTypes = {
	// test: PropTypes.string.isRequired,
	content: PropTypes.string,
	deleteItem: PropTypes.func,
	index: PropTypes.number
}
TodoItem.defaultProps = {
	// test: 'hello'
}
export default TodoItem;