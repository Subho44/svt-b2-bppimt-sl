import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import { Container,Row,Col } from 'react-bootstrap';
import Dustcard from '../components/Dustcard';
import Dustbinform from '../components/Dustbinform';

const Home = () => {
  const [dustbins,setDustbins] = useState([]);
  const [editdustbin,setEditdustbin] = useState(null);
  const [search,setSearch] = useState('');

//all view
  const fetchdustbins = async()=>{
    const res = await axios.get(`http://localhost:6500/api/dustbins?search=${search}`);
    setDustbins(res.data);
  }
  //delete
   const deletedustbin = async(id)=>{
    await axios.delete(`http://localhost:6500/api/dustbins/${id}`);
    fetchdustbins();
  }

  useEffect(()=>{
   fetchdustbins();
  },[search]);
  

  return <>
    <Container>
      <h2 className='my-4'>All Dustbins</h2>
      <input
        placeholder='search by name....'
        value={search}
        onChange={e=>setSearch(e.target.value)}
      />
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