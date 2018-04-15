import React from "react"

import Nav from "../components/layout/nav"

export default class Layout extends React.Component {
    render () {
        const { location } = this.props

        return (
            <div className="page">
                <Nav location={location} />

                <div className="container">
                    <div className="row">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}
