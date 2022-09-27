import React from "react";
import {Nav} from "react-bootstrap";
import { Link } from "react-router-dom";
import '../src/css/Sidebar.css'

const Sidebar = props => {
   
  const handlechange = (e)=>{
    
    props.handleChange(e.target.innerHTML)
  }
    return (
        <>
    
            <Nav className="col-md-2 d-none d-md-block bg-light sidebar"
            activeKey="/home"
            onSelect={selectedKey => alert(`selected ${selectedKey}`)}
            >
                <div className="sidebar-sticky"></div>
            <Nav.Item>
                <Nav.Link href="/home">Active</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                   <p onClick={(e)=>{handlechange(e)}}>User</p>
            </Nav.Item>
            <Nav.Item>
                <p onClick={(e)=> {handlechange(e)}}>Admin</p>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="disabled" disabled>
                Disabled
                </Nav.Link>
            </Nav.Item>
            </Nav>
          
        </>
        );
  };
  export default Sidebar