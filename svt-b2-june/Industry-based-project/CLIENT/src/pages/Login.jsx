import React,{useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Form,Button,Container } from 'react-bootstrap';

const Login = () => {
  const [form,setForm] = useState({email:'',password:''});
  const navigate = useNavigate();

  const hc =(e)=> {
    setForm({...form,[e.target.name]:e.target.value});
  }
  const hs  = async(e) => {
    e.preventDefault();
    const res = await axios.post('http://localhost:6500/api/auth/login',form);
    localStorage.setItem('token',res.data.token);
    navigate('/home');
  }

  return <>
   <Container className='my-4'>
      <Form onSubmit={hs}>
    
        <Form.Control 
          name='email'
          placeholder='Enter email'
          type='email'
          onChange={hc}
          required
        />
        <br />
         <Form.Control 
          name='password'
          placeholder='Enter password'
          type='password'
          onChange={hc}
          required
        />
        <br />
        <Button type='submit' variant='primary'>
          Login
        </Button>
      </Form>
    </Container>

  </>
}

export default Login