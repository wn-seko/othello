// tslint:disable:jsx-no-lambda
import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import Top from './containers/pages/Top'

const Routes = () => {
  return (
    <Switch>
      <Route exact={true} path="/" render={Top} />
      <Route path="*" render={() => <Redirect to="/" />} />
    </Switch>
  )
}

export default Routes
