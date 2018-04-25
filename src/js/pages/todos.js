import React from "react"
import { connect } from "react-redux"

import TodoList from '../components/todolist'

import { removeTodo, addTodo, changeTempTodoText  } from '../actions/todoActions'

const mapStateToProps = state => {
  return {
      todolists : state.todos.todolists
  }
}

const mapDispatchToProps = dispatch => { return {
        removeTodo: (id) => dispatch(removeTodo(id)),
        handleTodoTemp: (text, listid) => dispatch(changeTempTodoText(text, listid)),
        addNewTodo: (text, listid) => dispatch(addTodo(text, listid))
    }
}

 class Todos extends React.Component {
    render () {
        const listComponents =  this.props.todolists.map(
            (list) => <TodoList key={list.id} list={list} removeTodo={ this.props.removeTodo } handleAddTodo={ this.props.addNewTodo } handleTodoTemp={this.props.handleTodoTemp}/>)

        return (
            <div className="col-lg-12">
                <h1>Welcome</h1>
                <p>Welcome to todos, here you can manage your todo lists!</p>
                <div>
                    { listComponents }
                </div>
            </div>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Todos)
