import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
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
      .catch(console.error)
  }, [])

  const trainsJsx = trains.map(train => (
    <p key={train._id}>
      <Link to={`/trains/${train._id}`}>
        Train: {train.line} line at {train.station}
      </Link>
    </p>
  ))

  return (
    <React.Fragment>
      <h1>We found your train!</h1>
      {trainsJsx}
    </React.Fragment>
  )
}

export default Trains
