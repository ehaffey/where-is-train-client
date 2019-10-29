import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'

import AuthenticatedRoute from '../AuthenticatedRoute/AuthenticatedRoute'
import AutoDismissAlert from '../AutoDismissAlert/AutoDismissAlert'
import Header from '../Header/Header'
import SignUp from '../SignUp/SignUp'
import SignIn from '../SignIn/SignIn'
import SignOut from '../SignOut/SignOut'
import CreateTrain from '../Trains/CreateTrain'
import ShowTrains from '../Trains/Trains'
import Train from '../Trains/Train'
import EditTrain from '../Trains/EditTrain'
import ChangePassword from '../ChangePassword/ChangePassword'

class App extends Component {
  constructor () {
    super()

    this.state = {
      user: null,
      alerts: []
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  alert = ({ heading, message, variant }) => {
    this.setState({ alerts: [...this.state.alerts, { heading, message, variant }] })
  }

  render () {
    const { alerts, user } = this.state

    return (
      <Fragment>
        <Header user={user} />
        {alerts.map((alert, index) => (
          <AutoDismissAlert
            key={index}
            heading={alert.heading}
            variant={alert.variant}
            message={alert.message}
          />
        ))}
        <main className="container" style={{ backgroundImage: './../../../public/tmap.PNG' }}>
          <Route path='/sign-up' render={() => (
            <SignUp alert={this.alert} setUser={this.setUser} />
          )} />
          <Route exact path='/' render={() => (
            <SignIn alert={this.alert} setUser={this.setUser} user={user}/>
          )} />
          <AuthenticatedRoute user={user} path='/sign-out' render={() => (
            <SignOut alert={this.alert} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/change-password' render={() => (
            <ChangePassword alert={this.alert} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/create-train' render={() => (
            <CreateTrain alert={this.alert} user={user} />
          )} />
          <AuthenticatedRoute user={user} exact path='/trains' render={() => (
            <ShowTrains alert={this.alert} user={user} />
          )} />
          <AuthenticatedRoute user={user} exact path='/trains/:id' render={() => (
            <Train user={user} alert={this.alert} />
          )} />
          <AuthenticatedRoute user={user} path='/trains/:id/edit' render={() => (
            <EditTrain user={user} alert={this.alert} />
          )} />
        </main>
      </Fragment>
    )
  }
}

export default App
