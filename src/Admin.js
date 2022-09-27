import axios from "axios";
import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';

const Admin = ()=>{
    const [turf, setTurf] = useState([]);
    const [userRole, setUserRole] = useState("Admin")
    const [user, setUser] = useState([]);
    useEffect(()=>{
           "Admin" == "User"? axios.get('http://localhost:8081/api/users/getuser/6').then(res=>{
            setUser(res.data)
           }):getData();

    },[])
    const getData=()=>{
      axios.get("http://localhost:8081/api/turfs/getall").then(({data})=>{
            setTurf(data)
           })
    }
   const deleteHandler=(id)=>{
    if(id){
      axios.delete(`http://localhost:8081/api/turfs/deleteturf/${id}`).then(({data})=>{
                 console.log(data);
                  getData();
             }) 
  }
   }

    const handleChange = (e)=>{
               setUserRole(e)
    }
    return (
      <div  >
        
        <Sidebar handleChange={handleChange}/>
                    
        <div style={{marginLeft:'260px'}}>
                <h1> Welcome Admin</h1>
                <Link to="/addturf" style={
                  {
                    float:"right",
                    marginRight:80
                  }
                }><Button variant="primary">Add  Turf</Button></Link>
                <div style={{
                  display: 'flex',
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  width: '100%',
                  justifyContent: 'space-around'
                }}>
                  {
                    turf.map(t=>(
                      <div className='child'>
                      <Card style={{ width: '18rem' }} className="m-5">
                          <Card.Img variant="bottom" src="https://picsum.photos/200/200" />
                          <Card.Body>
                              <Card.Title>{t.turfName}</Card.Title>
                              <Card.Text>
                                  {t.turfAddress} {t.turfContact}
                              </Card.Text>
                              <Link to={`/addturf/${t.id}`}> <Button>Edit</Button> </Link>
                              <Button onClick={()=>deleteHandler(t.id)}>Delete</Button>
                          </Card.Body>
                      </Card>            
                  </div>
                    ))
                   } 
                </div>
              
            </div>
            </div>
    )
}

export default Admin;

// { userRole == "Admin"? turf.map(t=>{
//   return <div class="card" style={{width: '18rem'}}>
//    <img src="..." class="card-img-top" alt="..."/>
//    <div class="card-body">
//      <h5 class="card-title">Card title</h5>
//      <p class="card-text">{t.name}</p>
//    <p>hello world</p>
       
//      {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
//    </div>
            
//    </div>
            
 
//              })
//  :user.map(t=>{
//    return <div class="card" style={{width: '18rem'}}>
//     <img src="..." class="card-img-top" alt="..."/>
//     <div class="card-body">
//       <h5 class="card-title">Card title</h5>
//       <p class="card-text">{t.name}</p>
//       {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
//     </div>
             
//     </div>
             
  
//               })}