import Header from "./layout/Header";
import React from "react";
import Todos from './Todos';
import AddTodo from "./AddTodo";
import { v4 as uuidv4 } from 'uuid';

class TodoApp extends React.Component{
    state = {
        todos:[{
            id: uuidv4(),
            title: "Setup development environment",
            completed: true
        },
        {
            id: uuidv4(),
            title: "Develop website  and add content",
            completed: false
        },
        {
            id: uuidv4(),
            title: "Deploy the live server",
            completed: false
        }
    ]
    };
    deleteTodo = id => {
        this.setState({
            todos: [
                ...this.state.todos.filter(todo => {
                    return todo.id !== id;
                })
            ]
        })
        //console.log("delete", id);
    }
    handleChange = id => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            })
        })
        //console.log("clicked", id)
    }
    AddTodo = title =>{
        const newTodo = {
            id: uuidv4(),
            title: title,
            completed: false
        };
        this.setState({
            todos: [...this.state.todos, newTodo]
        });
        //console.log(title);
    }
    render() {
        return (
            <div className="container">
                <Header/>
                <AddTodo addTodo={this.AddTodo} />
               <Todos 
                todos={this.state.todos} 
                handleChange={this.handleChange} 
                deleteTodo={this.deleteTodo} />               
            </div>
        );
    }
}
export default TodoApp;