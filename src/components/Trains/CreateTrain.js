import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
import axios from 'axios'
import apiUrl from './../../apiConfig'
import { Redirect } from 'react-router-dom'
import TrainForm from './TrainForm'

const CreateTrain = ({ user, alerts }) => {
  // const [books, setBooks] = useState([])
  const [created, setCreated] = useState(null)
  const [train, setTrain] = useState({
    line: '',
    station: ''
  })

  const handleChange = (event) => {
    event.persist()
    setTrain(train => ({ ...train, [event.target.name]: event.target.value }))
  }

  const handleSubmit = event => {
    event.preventDefault()

    axios({
      method: 'POST',
      url: `${apiUrl}/trains`,
      headers: {
        'Authorization': `Token token=${user.token}`
      },
      data: { train }
    })
      .then(response => setCreated(response.data.train._id))
      .catch(console.error)
  }

  if (created) {
    return <Redirect to={`/trains/${created}`} />
  }

  return (
    <TrainForm
      train={train}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  )
}

export default CreateTrain
