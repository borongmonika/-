import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Todolist from './newTodoList';
import store from './store';
// import Calculator from './Rua';
// import FancyBorder from './SidebarDialog';
const App = (
    <Provider store={store}>
        <Todolist />
    </Provider>
);

ReactDOM.render(App ,document.getElementById('root'));
