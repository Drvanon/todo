import React from 'react'

import TodoItem from './todoItem'

export default class TodoList extends React.Component {
    render () {
        const todolist  = this.props.list
        const todoItems = todolist.todos.map(todo => {
            return <TodoItem key={ todo.id } text={ todo.text } finished={ todo.finished }/>
        })

        return (
            <div className="card todo-list list-group">
                <div className="card-body">
                    <h5 className="card-title">{ todolist.name }</h5>
                    <div>
                        { todoItems }
                    </div>
                </div>
            </div>
        )
    }
}
