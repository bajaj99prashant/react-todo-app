import React from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends React.Component {
    render () {
        return this.props.todos.map((todo) => {
            return (
                <TodoItem key={todo.id} todoItem={todo} markComplete = {this.props.markComplete} delTodo = {this.props.delTodo}/>
            );
        })
    }
}

// PropTypes
Todos.propTypes = {
    todos: PropTypes.array.isRequired
}

export default Todos;