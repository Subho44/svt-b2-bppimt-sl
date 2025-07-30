import React from 'react'
import { Button, Card, Container } from 'react-bootstrap'

const Dustcard = ({ dustbin, onDelete, onEdit }) => {
  const imageurl = `http://localhost:6500/uploads/${dustbin.image}`;
  return <>
    <Container className='my-4'>
      <Card style={{ width: '22rem', }}>
        <Card.Img src={imageurl} alt='img' style={{width:"200px"}} />
        <Card.Body>
          <Card.Title>{dustbin.location}</Card.Title>
          <Card.Text>{dustbin.status}</Card.Text>
          <Button variant='danger' className='me-2' onClick={() => onDelete(dustbin._id)} >Delete</Button>

          <Button variant='danger' onClick={() => onEdit(dustbin)}>Edit</Button>


        </Card.Body>


      </Card>
    </Container>
  </>
}

export default Dustcard