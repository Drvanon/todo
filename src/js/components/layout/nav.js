import React from "react"
import {Link} from "react-router-dom"

export default class Nav extends React.Component {
    render () {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <a className="navbar-brand">Todo</a>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav mr-auto">
                      <li className="item">
                          <Link to="/">Your todos</Link>
                      </li>
                  </ul>
                </div>
            </nav>
        )
    }
}
