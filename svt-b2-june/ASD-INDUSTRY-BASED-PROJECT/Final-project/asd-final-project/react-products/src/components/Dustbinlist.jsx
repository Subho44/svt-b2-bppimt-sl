import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Dustbinlist = ({ setSelecteddustbin }) => {
    const [dustbins, setDustbins] = useState([]);
    const [search, setSearch] = useState('');


    const fetchDustbins = async () => {
        const res = await axios.get(`http://localhost:6500/api/dustbins?search=${search}`);
        setDustbins(res.data);
    }
    useEffect(() => {
        fetchDustbins();
    }, [search]);
    const deletedustbin = async (id) => {
        await axios.delete(`http://localhost:6500/api/dustbins/${id}`);
        fetchDustbins();

    }

    return <>
    <input
        type='text'
        placeholder='search all location...'
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        
    />
        <table className='table table-dark'>
            <tr>
                <th>Location</th>
                <th>Status</th>
                <th>Action</th>
            </tr>
            {
                dustbins.map(x => (
                    <tr>
                        <td>{x.location}</td>
                        <td>{x.status}</td>
                        <td>
                            <button onClick={() => setSelecteddustbin(x)} className='btn btn-danger'>Edit</button>
                            <button onClick={() => deletedustbin(x._id)} className='btn btn-warning'>Delete</button>
                        </td>
                    </tr>
                ))
            }

        </table>
    </>
}

export default Dustbinlist