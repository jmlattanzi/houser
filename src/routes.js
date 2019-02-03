import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard'
import Wizard from './components/Wizard/Wizard'
import WizardOne from './components/Wizard/WizardOne'

const routes = (
    <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route exact path='/wizard' component={Wizard} />
        <Route path='/wizard/next' component={WizardOne} />
    </Switch>
)

export default routes
