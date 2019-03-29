import React, { Component } from 'react';
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
	render() {
		const { content } = this.props;
		return (
			<li
				onClick={this.handelClick}>
				{content}
			</li>
		)
	}
}
export default TodoItem;