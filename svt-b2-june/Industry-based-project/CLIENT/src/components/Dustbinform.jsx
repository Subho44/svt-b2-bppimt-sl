import React, { useState } from 'react';
import { Form, Container, Button } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Dustbinform = ({ dustbinEdit, refreshdustbins }) => {
  const [dustbin, setDustbin] = useState(dustbinEdit || {
    location: '', status: '', image: null,
  });

  const navigate = useNavigate();

  // Handle input change
  const hc = (e) => {
    const { name, value, files } = e.target;
    setDustbin(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  // Handle submit with FormData
  const hs = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('location', dustbin.location);
    formData.append('status', dustbin.status);
    if (dustbin.image) {
      formData.append('image', dustbin.image);
    }

    try {
      if (dustbinEdit) {
        await axios.put(`http://localhost:6500/api/dustbins/${dustbin._id}`, formData);
      } else {
        await axios.post('http://localhost:6500/api/dustbins', formData);
        navigate('/');
      }
      refreshdustbins();
    } catch (error) {
      console.error('Error uploading dustbin data:', error);
      alert('Image uploaded Sucessfully');
    }
  };

  return (
    <Container className='my-4'>
      <Form onSubmit={hs} encType='multipart/form-data'>
        <Form.Control 
          name='location'
          placeholder='Enter location'
          value={dustbin.location}
          onChange={hc}
          required
        />
        <br />
        <Form.Control 
          name='status'
          placeholder='Enter status'
          value={dustbin.status}
          onChange={hc}
          required
        />
        <br />
        <Form.Control 
          name='image'
          type='file'
          onChange={hc}
          
        />
        <br />
        <Button type='submit' variant='success'>
          {dustbinEdit ? 'Update' : 'Add'}
        </Button>
      </Form>
    </Container>
  );
};

export default Dustbinform;
