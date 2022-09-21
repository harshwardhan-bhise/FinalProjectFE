import { useEffect, useState } from "react";

const Admin = ()=>{
    const [turf, setTurf] = useState([]);

    useEffect(()=>{
    setTurf([{name:'harsh'}])
    },[])
    return (
        <div style={{marginTop: '100px'}}>
           { turf.map(t=>{
 return <div class="card" style={{width: '18rem'}}>
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">{t.name}</p>
    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
  </div>
           
  </div>
           

            })
}
            </div>

    )
}

export default Admin;