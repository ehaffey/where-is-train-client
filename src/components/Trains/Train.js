import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import { Link, Redirect, withRouter } from 'react-router-dom'
import axios from 'axios'
import apiUrl from './../../apiConfig'

const Train = ({ user, match, alerts }) => {
  const [train, setTrain] = useState([])
  const [deleted, setDeleted] = useState(false)

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
      .then(() => setDeleted(true))
      .catch(error => {
        console.error(error)
        alert({
          heading: 'Failed',
          message: 'Nope',
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
      <p>Station: {train.station}</p>
      <Link to={`/trains/${match.params.id}/edit`}>
        <Button variant="warning" type="button">Edit</Button>
      </Link>
      <Button variant="danger" onClick={destroy}>Delete</Button>
    </React.Fragment>
  )
}

export default withRouter(Train)
