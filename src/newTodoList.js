import React, {  } from 'react';
// import store from './store';
import { connect } from 'react-redux';

const TodoList = (props) => {
	const { inputValue, changeInputValue, handleClick, list, handleDelete } = props;
		return (

			<div>
				<div>
					<input
						value={inputValue}
						onChange={changeInputValue.bind(this)} />
					<button onClick={handleClick}>add</button>
				</div>
				<ul>
					{
						list.map((item, index) => {
							return <li onClick={handleDelete} key={index}>{item}</li>
						})
					}
				</ul>
			</div>

		)
	

}
// class TodoList extends Component {

// 	render() {
// 		const { inputValue, changeInputValue, handleClick, list, handleDelete } = this.props;
// 		return (

// 			<div>
// 				<div>
// 					<input
// 						value={inputValue}
// 						onChange={changeInputValue.bind(this)} />
// 					<button onClick={handleClick}>add</button>
// 				</div>
// 				<ul>
// 					{
// 						list.map((item, index) => {
// 							return <li onClick={handleDelete} key={index}>{item}</li>
// 						})
// 					}
// 				</ul>
// 			</div>

// 		)
// 	}
// }

const mapStateToProps = (state) => {
	return {
		inputValue: state.inputValue,
		list: state.list
	}
}
//store.dispatch.props
const mapDispatchToProps = (dispatch) => {
	return {
		changeInputValue(e) {
			const action = {
				type: 'change_input_value',
				value: e.target.value
			}
			dispatch(action)
		},
		handleClick() {
			const action = {
				type: 'add_item'
			}
			dispatch(action);
		},
		handleDelete() {
			const action = {
				type: 'delete_type',
				
			}
			dispatch(action)
		}
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);