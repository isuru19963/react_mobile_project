import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { NavBar } from '../components'
import { MobileList, MobileInsert, MobileUpdate } from '../pages/index'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path="/mobile/list" exact component={MobileList} />
                <Route path="/mobile/create" exact component={MobileInsert} />
                <Route
                    path="/mobile/update/:id"
                    exact
                    component={MobileUpdate}
                />
            </Switch>
        </Router>
    )
}

export default App