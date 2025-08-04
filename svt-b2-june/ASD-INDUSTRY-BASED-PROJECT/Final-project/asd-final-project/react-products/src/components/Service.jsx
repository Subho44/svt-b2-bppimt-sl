import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Dustbinform from './Dustbinform';
import Dustbinlist from './Dustbinlist';

const Service = () => {
  const [dustbins,setDustbins]=useState([]);
  const [selectedDustbin,setSelectedDustbin]= useState(null);

  const fetchDustbins = async()=>{
    const res = await axios.get('http://localhost:6500/api/dustbins');
    setDustbins(res.data);
  }
  useEffect(()=>{
    fetchDustbins();
  },[]);

  return <>
  <div className='mt-5'>
    <Dustbinform fetchDustbin={fetchDustbins} selectedDustbin={selectedDustbin} setSelectedDustbin={selectedDustbin}  />
    <Dustbinlist dustbins={dustbins} fetchDustbins={fetchDustbins} setSelecteddustbin={setSelectedDustbin} />
  
  </div>
  </>
}

export default Service