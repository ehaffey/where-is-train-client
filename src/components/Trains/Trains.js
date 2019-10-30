import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import axios from 'axios'
import apiUrl from './../../apiConfig'

const Trains = ({ user, alerts }) => {
  const [trains, setTrains] = useState([])

  useEffect(() => {
    axios({
      method: 'GET',
      url: `${apiUrl}/trains`,
      headers: {
        'Authorization': `Token token=${user.token}`
      }
    })
      .then(responseData =>
        setTrains(responseData.data.trains))
      .catch(error => {
        console.error(error)
        alert({
          heading: 'Failed',
          message: 'This is terribly embarrasing, but we are having trouble loading your data at the moment, perhaps the server is taking a nap. Please try again later.',
          variant: 'danger'
        })
      })
  }, [])

  const trainsJsx = trains.map(train => (
    <p key={train._id}>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Train: {train.line}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Station: {train.station}</Card.Subtitle>
          <Card.Text>
            <Link to={`/trains/${train._id}`}>
              <Button variant="primary">More Details</Button>
            </Link>
          </Card.Text>
        </Card.Body>
      </Card>
    </p>
  ))

  return (
    <React.Fragment>
      <h1>Your Trains</h1>
      {trainsJsx}
    </React.Fragment>
  )
}

export default Trains
