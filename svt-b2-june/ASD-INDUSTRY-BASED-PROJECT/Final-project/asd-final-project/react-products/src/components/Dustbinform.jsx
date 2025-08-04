import React,{useState,useEffect} from 'react';
import axios from 'axios'

const Dustbinform = ({fetchDustbin,selectedDustbin,setSelectedDustbin}) => {
    const [form,setForm] = useState({location:'',status:''});
    useEffect(()=>{
        if(selectedDustbin) setForm(selectedDustbin);
    },[selectedDustbin]);
    const hc=(e)=>{
        setForm({...form,[e.target.name]:e.target.value});
    }
    const hs = async(e) => {
        e.preventDefault();
        if(selectedDustbin) {
            await axios.put(`http://localhost:6500/api/dustbins/${selectedDustbin._id}`,form);
            setSelectedDustbin(null);

        } else {
            await axios.post('http://localhost:6500/api/dustbins',form);
        }
        setForm({location:'',status:''});
        fetchDustbin();
    }
  return <>
    <form onSubmit={hs}>
    <input name='location' placeholder='location...' value={form.location} onChange={hc} required/>
    <br></br>
    <input name='status' placeholder='status...' value={form.status} onChange={hc} required/>
    <br></br>
    <button type='submit'>{selectedDustbin ? "update":"Add"} Dustbin</button>


    </form>
  </>
}

export default Dustbinform