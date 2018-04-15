import React from 'react'

export default class TodoItem extends React.Component {
    render () {
        const { text, finished } = this.props

        return (
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <input type="checkbox" value={ finished } />
                        </div>
                    </div>
                <input type="text" value={ text } />
                        
                </div>
        )
    }
}
 
