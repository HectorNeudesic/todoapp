import React from 'react'

class TodoItem extends React.Component {
    
  render() {
    const {completed, id, title} = this.props.todo
    const completedStyle = {fontStyle: "italic", color: "#c5e2d2", textDecoration: "line-through"}
    return (        
      <li className='todo-item'>
          <input type="checkbox" checked={completed} 
            onChange={() => this.props.handleChange(id)}/>
          <button className='btn-style' onClick={() => this.props.deleteTodo(id)}>
           X
          </button>
          <span style={completed ? completedStyle : null}>
          {title}
          </span>
      </li>
    );
  }
}

export default TodoItem