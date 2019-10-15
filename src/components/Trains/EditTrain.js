import React, { useState, useEffect } from 'react'
import { Redirect, withRouter } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import TrainForm from './TrainForm'

const EditTrain = ({ user, alert, match }) => {
  const [train, setTrain] = useState({
    line: '',
    station: ''
  })
  const [updated, setUpdated] = useState(false)

  useEffect(() => {
    axios({
      method: 'GET',
      url: `${apiUrl}/trains/${match.params.id}`,
      headers: {
        'Authorization': `Token token=${user.token}`
      }
    })
      .then(res => setTrain(res.data.train))
      .catch(console.error)
  }, [])

  const handleChange = (event) => {
    event.persist()
    setTrain(train => ({ ...train, [event.target.name]: event.target.value }))
    // const updatedField = { [event.target.name]: event.target.value }
    // const editedMovie = Object.assign(movie, updatedField)

  // setMovie(editedMovie)
  }

  const handleSubmit = event => {
    event.preventDefault()

    axios({
      url: `${apiUrl}/trains/${match.params.id}`,
      method: 'PATCH',
      headers: {
        'Authorization': `Token token=${user.token}`
      },
      data: { train }
    })
      .then(() => alert({ heading: 'Success', message: 'You updated a train to keep track of', variant: 'success' }))
      .then(() => setUpdated(true))
      .catch(console.error)
  }
  if (updated) {
    return <Redirect to={`/trains/${match.params.id}`} />
  }

  return (
    <TrainForm
      train={train}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  )
}

export default withRouter(EditTrain)
