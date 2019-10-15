import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const TrainForm = ({ train, handleChange, handleSubmit }) => {
  const cancelPath = '#trains'

  return (
    <form onSubmit={handleSubmit}>
      <Form.Group controlId="line">
        <Form.Label>Line</Form.Label>
        <Form.Control
          type="text"
          placeholder="Line (Red, Green, Blue, etc)"
          name="line"
          onChange={handleChange}
          value={train.line}
          required
        />
      </Form.Group>
      <Form.Group controlId="station">
        <Form.Label>Station</Form.Label>
        <Form.Control
          type="text"
          placeholder="Station (Downtown Crossing, etc)"
          name="station"
          onChange={handleChange}
          value={train.station}
          required
        />
      </Form.Group>
      <Button variant="primary" type="submit">Save</Button>
      <Button variant="danger" href={cancelPath} className="ml-2" type="button">Back to View All Trains</Button>
    </form>
  )
}

export default TrainForm
