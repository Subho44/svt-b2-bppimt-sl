import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import { Container,Row,Col } from 'react-bootstrap';
import Dustcard from '../components/Dustcard';
import Dustbinform from '../components/Dustbinform';

const Home = () => {
  const [dustbins,setDustbins] = useState([]);
  const [editdustbin,setEditdustbin] = useState(null);

//all view
  const fetchdustbins = async()=>{
    const res = await axios.get('http://localhost:6500/api/dustbins');
    setDustbins(res.data);
  }
  //delete
   const deletedustbin = async(id)=>{
    await axios.delete(`http://localhost:6500/api/dustbins/${id}`);
    fetchdustbins();
  }

  useEffect(()=>{
   fetchdustbins();
  },[]);
  

  return <>
    <Container>
      <h2 className='my-4'>All Dustbins</h2>
      <Row>
        
          {dustbins.map(x=>(
            <Col md={3} className='d-flex'>
            <Dustcard key={x._id} dustbin={x} 
            onDelete={deletedustbin}
              onEdit={setEditdustbin}
            />
            </Col>
          ))}
        
      </Row>
      {editdustbin && <Dustbinform dustbinEdit={editdustbin} refreshdustbins={fetchdustbins}/>}
    </Container>
  </>
}

export default Home