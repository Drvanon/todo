import React from "react"
import { connect } from "react-redux"

import TodoList from '../components/todolist'

import { removeTodo, addTodo, changeTempTodoText, changeTempListText, addTodoList  } from '../actions/todoActions'

const mapStateToProps = state => {
    return {
        todolists : state.todos.todolists,
        templist: state.todos.templist
    }
}

const mapDispatchToProps = dispatch => { 
    return {
        removeTodo: (id) => dispatch(removeTodo(id)),
        handleTodoTemp: (text, listid) => dispatch(changeTempTodoText(text, listid)),
        addNewTodo: (text, listid) => dispatch(addTodo(text, listid)),
        handleListTemp: (text) => dispatch(changeTempListText(text)),
        createList: (text) => dispatch(addTodoList(text))
    }
}

class Todos extends React.Component {
    render () {
        const listComponents =  this.props.todolists.map(
            (list) => <TodoList key={list.id} list={list} removeTodo={ this.props.removeTodo } handleAddTodo={ this.props.addNewTodo } handleTodoTemp={this.props.handleTodoTemp}/>)

        const handleTempList = (event) => this.props.handleListTemp(event.target.value)
        const handleCreateList = () => this.props.createList(this.props.templist)

        return (
            <div className="col-lg-12">
                <h1>Welcome</h1>
                <p>Welcome to todos, here you can manage your todo lists! If you want to create a new list, give it a title and click 'create'.</p>
                <div className="form-inline">
                    <input onChange={ handleTempList } value={ this.props.templist } className="form-control mb-2 mr-sm-2" type="text" />
                    <button className="btn btn-primary mb-2" onClick={ handleCreateList }>Create</button>
                </div>
                <div className="mt-1 card-columns">
                    { listComponents }
                </div>
            </div>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Todos)
