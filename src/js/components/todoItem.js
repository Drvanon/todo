import React from 'react'
import { connect } from 'react-redux'
import removeTodo from '../actions/todoActions'


export default class TodoItem extends React.Component {
    render () {
        const { text, finished, remove } = this.props
        const handleRemove = () => remove(this.props.id)

        return (
            <div className="input-group mb-3 ">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <input type="checkbox" defaultValue={ finished } />
                    </div>
                </div>
                <input type="text" defaultValue={ text } />
                <div className="input-group-append">
                    <button className="btn btn-danger" type="button" onClick={handleRemove}>X</button>
                </div>
            </div>
        )
    }
}
