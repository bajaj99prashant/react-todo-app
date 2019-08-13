import React from 'react';
import PropTypes from 'prop-types';

class TodoItem extends React.Component {
    getStyle ()  {
        return {
            background : '#f4f4f4',
            padding : '0.625rem',
            borderBottom : '0.125rem #ccc dotted',
            textDecoration : this.props.todoItem.completed ? 'line-through' : 'none'
        }
    }
    render () {
        const { id, title } = this.props.todoItem;
        return (
            <div style={ this.getStyle() }>
                <p>
                    <input type="checkbox" onChange={ this.props.markComplete.bind(this, id) } /> {' '}
                    {title}
                    <button style={btnStyle} onClick={ this.props.delTodo.bind(this, id) }>x</button>
                </p>
            </div>
        );
    }
}



// PropTypes
TodoItem.propTypes = {
    todoItem : PropTypes.object.isRequired
}

const btnStyle = {
    background : '#ff0000',
    color : 'white',
    border : 'none',
    padding : '0.3125rem 0.625rem',
    borderRadius : '50%',
    cursor : 'pointer',
    float : 'right'
}
export default TodoItem;