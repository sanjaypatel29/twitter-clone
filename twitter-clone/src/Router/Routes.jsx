import React from 'react'
import { Route, Switch } from "react-router-dom"
import Dashboard from './Dashboard'
import PrivatesRoutes from './PrivatesRoutes'
import Login from './Login'


function Routes() {
    return (
        <>
            <Switch>
                <Route path="/" exact render={() => <Dashboard />} />
                <Route path="/login" render={() => <Login />} />
                <PrivatesRoutes />
                <Route render={() => <div>Error:404 page not found</div>} />
            </Switch>
        </>
    )
}
export { Routes }