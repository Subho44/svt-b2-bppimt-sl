import React from 'react'
import { Card } from 'react-bootstrap'

const Dustcard = ({dustbin}) => {
    const imageurl = `http://localhost:6500/uploads/${dustbin.image}`;
  return <>
    <Card style={{width:'18rem',margin:"1rem"}}>
    <Card.Img src={imageurl} alt='img' style={{}}/>
    <Card.Body>
        <Card.Title>{dustbin.location}</Card.Title>
        <Card.Text>{dustbin.status}</Card.Text>
    </Card.Body>


    </Card>
  </>
}

export default Dustcard