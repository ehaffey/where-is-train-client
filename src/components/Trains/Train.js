import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import { Link, Redirect, withRouter } from 'react-router-dom'
import axios from 'axios'
import apiUrl from './../../apiConfig'

const Train = ({ user, match, alert }) => {
  const [train, setTrain] = useState([])
  const [deleted, setDeleted] = useState(false)
  const [trainAlerts, setTrainAlerts] = useState([{
    attributes: {
      header: 'Click Check Alerts to download the latest alerts from the MBTA',
      timeframe: 'N/A'
    } }])

  const mbtaGet = () => {
    axios({
      method: 'GET',
      url: `https://api-v3.mbta.com/alerts?filter%5Bactivity%5D=BOARD%2CEXIT%2CRIDE&filter%5Broute%5D=${train.line}`,
      headers: {
        'accept': 'application/vnd.api+json'
      }
    })
      // .then(responseData =>
      //   console.log(responseData.data.data))
      .then(responseData =>
        (responseData.data.data[0]) ? setTrainAlerts(responseData.data.data) : setTrainAlerts([{
          attributes: {
            header: 'None!',
            timeframe: 'N/A'
          } }])
      // console.log(trainAlerts)
      )
      .then(() => alert({
        heading: 'Success',
        message: 'Service alerts loaded',
        variant: 'success'
      }))
      // .then(responseData =>
      //   console.log(trainAlerts))
      .catch(error => {
        console.error(error)
        alert({
          heading: 'Failed',
          message: 'This is terribly embarrasing, but we are having trouble loading your data at the moment, perhaps the server is taking a nap. Please try again later.',
          variant: 'danger'
        })
      })
  }

  // if (alertsJsx[0].attributes.header !== 'None!') {
  const alertsJsx = trainAlerts.map(trainAlert => (
    <div key={trainAlert.attributes.header}>
      <p>Alert: {trainAlert.attributes.header}</p>
      <p>When: {trainAlert.attributes.timeframe}</p>
    </div>
  ))
  // }

  useEffect(() => {
    axios({
      method: 'GET',
      url: `${apiUrl}/trains/${match.params.id}`,
      headers: {
        'Authorization': `Token token=${user.token}`
      }
    })
      .then(responseData =>
        setTrain(responseData.data.train))
      .catch(error => {
        console.error(error)
        alert({
          heading: 'Failed',
          message: 'We are having trouble loading your data at the moment, perhaps the server is taking a nap. Please try again later.',
          variant: 'danger'
        })
      })
  }, [])

  const destroy = () => {
    axios({
      method: 'DELETE',
      url: `${apiUrl}/trains/${train._id}`,
      headers: {
        'Authorization': `Token token=${user.token}`
      }
    })
      .then(() => alert({ heading: 'Success', message: 'Train deleted', variant: 'success' }))
      .then(() => setDeleted(true))
      .catch(error => {
        console.error(error)
        alert({
          heading: 'Failed',
          message: 'Unhelpful error message',
          variant: 'danger'
        })
      })
  }

  if (deleted) {
    return <Redirect to='/trains' />
  }

  return (
    <React.Fragment>
      <h3>The following information is being used to track this train</h3>
      <p>Line: {train.line}</p>
      <p>Your Station: {train.station}</p>
      <Link to={`/trains/${match.params.id}/edit`}>
        <Button variant="warning" type="button">Edit</Button>
      </Link>
      <Button variant="danger" onClick={destroy}>Delete</Button>
      <Button variant="danger" onClick={mbtaGet}>Check Alerts</Button>
      {alertsJsx}
    </React.Fragment>
  )
}

export default withRouter(Train)
