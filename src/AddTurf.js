import { useEffect, useState } from "react"
import axios from "axios";
import { Routes, Route, useParams ,useNavigate} from 'react-router-dom';

const AddTurf=()=>{
    let { id } = useParams();
    console.log(id)
    const [name,setName]=useState('')
    const [address,setAddress]=useState('')
    const [contact,setContact]=useState('')
    const navigate=useNavigate();
    const submitHandler=(e)=>{
        e.preventDefault();
        if(id){
            axios.put(`http://localhost:8081/api/turfs/updateturf/${id}`,{turfName:name,turfAddress:address,
            turfContact:contact}).then(res=>{
                    console.log(res.data)
                    navigate('/Admin')
                   })
        }else{
        axios.post('http://localhost:8081/api/turfs/addturf',{turfName:name,turfAddress:address,
    turfContact:contact}).then(res=>{
            console.log(res.data)
            navigate('/Admin')
           })
        }
       
    }
    useEffect(()=>{
            if(id){
                axios.get(`http://localhost:8081/api/turfs/getturf/${id}`).then(({data})=>{
                         setName(data.turfName)
                         setAddress(data.turfAddress)
                         setContact(data.turfContact)
                       }) 
            }
    },[])
    return (
        <div>
            <h1>ADD Turf</h1>
           <form>
  <div className="form-group">
    <label >Turf Name</label>
    <input type="text" className="form-control" value={name}  onChange={e=>setName(e.target.value)} placeholder="Turf Name"/>
  </div>
  <div className="form-group">
    <label >Turf Contact</label>
    <input type="text" className="form-control" value={contact} onChange={e=>setContact(e.target.value)} placeholder="Turf Contact"/>
  </div>
  <div className="form-group">
    <label >Turf Address</label>
    <input type="text" className="form-control" value={address} onChange={e=>setAddress(e.target.value)} placeholder="Turf Address"/>
  </div>
  <button type="submit" className="btn btn-primary" onClick={submitHandler}>{id?'Edit':'Submit'}</button>
</form>
        </div>
    )
}

export default AddTurf
