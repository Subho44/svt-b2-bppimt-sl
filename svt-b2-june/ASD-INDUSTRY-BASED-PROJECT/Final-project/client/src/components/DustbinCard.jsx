import React from 'react'
import { Card } from 'react-bootstrap'

const DustbinCard = ({dustbin}) => {
  return <>
    <Card style={{width:'18rem', margin:'1rem'}}>
    <Card.Body>
        <Card.Title>Location:{dustbin.location}</Card.Title>
        <Card.Text>Status:{dustbin.status}</Card.Text>
    </Card.Body>
    </Card>
  </>
}

export default DustbinCard