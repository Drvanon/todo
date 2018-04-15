import React from "react"
import { connect } from "react-redux"

import TodoList from '../components/todolist'

const mapStateToProps = state => {
  return {
      todolists : state.todos.todolists,
      test: "test"
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

 class Todos extends React.Component {
    render () {
        
        const listComponents =  this.props.todolists.map(
            (list) => <TodoList key={list.id} list={list} />)

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
