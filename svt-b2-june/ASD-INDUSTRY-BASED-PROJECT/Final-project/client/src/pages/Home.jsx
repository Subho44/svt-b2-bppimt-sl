import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { Container,Row,Col } from 'react-bootstrap';
import DustbinCard from '../components/DustbinCard';
const Home = () => {
    const [dustbins,setDustbins] = useState([]);
    useEffect(()=>{
        const fetchdustbin = async()=> {
            try {
                const res = await axios.get('http://localhost:6500/api/dustbins');
                setDustbins(res.data);
            } catch(error) {
                console.error('error',error);
            }
        };
        fetchdustbin();
    },[]);
  return <>
  <Container className='mt-4'>
  <h2>Dustbins List</h2>
  <Row>
    {dustbins.map((x)=>(
        <Col md={4}>
            <DustbinCard dustbin={x}/>
        </Col>
    ))}
  </Row>

  </Container>
    
  </>
}

export default Home