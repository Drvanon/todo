import React from "react"
import ReactDOM from "react-dom"
import { HashRouter as Router, Route, IndexRoute, Switch } from "react-router-dom"
import { Provider } from 'react-redux'

import store from './store'

import Layout from "./pages/layout"
import Todos from "./pages/todos"

const app = document.getElementById('app')

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Todos} />
                </Switch>
            </Layout>
        </Router>
    </Provider>,
app);
