import React from 'react'

import TodoItem from './todoItem'

export default class TodoList extends React.Component {
    render () {

        const todolist  = this.props.list
        const todoItems = todolist.todos.map(todo => {
            return <TodoItem key={ todo.id } {...todo} 
                finished={ todo.finished } remove={ this.props.removeTodo }/>
        })

        const handleAddTodoButton = () => {
            this.props.handleAddTodo(todolist.temptext, todolist.id)
        }

        const handleTextChange = (event) => {
            this.props.handleTodoTemp(event.target.value, todolist.id)
        }
        return (
                <div className="card todo-list list-group">
                    <h5 className="card-header">{ todolist.name }</h5>
                    <div className="card-body">
                        <div>
                            { todoItems }
                        </div>
                        <div className="input-group mb-3 ">
                            <input type="text" onChange={handleTextChange} value={todolist.temptext}/>
                            <div className="input-group-append">
                                <button className="btn btn-success" onClick={handleAddTodoButton}>Add todo</button>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}
