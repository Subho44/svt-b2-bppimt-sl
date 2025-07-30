import React from 'react'
import { Form, Container, Button } from 'react-bootstrap'
import { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Dustbinform = ({ dustbinEdit, refreshdustbins }) => {
  const [dustbin, setDustbin] = useState(dustbinEdit || {
    location: '', status: '',image:null,
  });
  const navigate = useNavigate();
  const hc = (e) => {
   const {name,value,files} = e.target;
   setDustbin(prev => ({
    ...prev,
    [name]:files ? files[0]: value
   }));
  }
  const hs = async (e) => {
    e.preventDefault();
    if (dustbinEdit) {
      await axios.put(`http://localhost:6500/api/dustbins/${dustbin._id}`, dustbin);
      
    }
    
    else {
      await axios.post('http://localhost:6500/api/dustbins', dustbin);
       navigate('/');
    }
    refreshdustbins();
  }
  

  return <>
    <Container className='my-4'>
      <Form onSubmit={hs}>
        <Form.Control name='location'
          placeholder='enter location'
          value={dustbin.location}
          onChange={hc}
          required
          />
          <br></br>
          <Form.Control name='status'
          placeholder='enter status'
          value={dustbin.status}
          onChange={hc}
          required
          />
          <br></br>
           <Form.Control 
           name='image'
           type='file'
           onChange={hc}
          required
          />
          <br></br>
          <Button type='submit' variant='success'>
            {dustbinEdit ?'Update':'Add'}
          </Button>
      </Form>
    </Container>
  </>
}

export default Dustbinform