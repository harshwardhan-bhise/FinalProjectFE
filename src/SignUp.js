import "./css/login.css";
import React, { Component, useState } from 'react'
import { renderMatches } from 'react-router-dom';

const SignUp = () => {
  const [user, setUser] = useState({})
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [FirstNameError, setFirstNameError] = useState("");
  const [LastNameError, setLastNameError] = useState("");
  const [ContactError, setContactError] = useState("");



  const handleChange = (e) => {

    if (e.target.firstname == 'firstname') {
      setFirstNameError("")
    }

    if (e.target.name == 'lastname') {
      setLastNameError("")
    }


    if (e.target.name == 'contact') {
      setContactError("")
    }

    if (e.target.name == 'email') {
      setEmailError("")
    }


    if (e.target.name == 'password') {
      setPasswordError("")
    }


    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const isValidate = (user) => {
    let isValid = true;

    if (user.firstname == "" || user.firstname == undefined || user.firstname == null) {
      setFirstNameError("First Name required")
      isValid = false
    }

    if (user.lastname == "" || user.lastname == undefined || user.lastname == null) {
      setLastNameError("Last Name required")
      isValid = false
    }

    if (user.email != "" || user.email != null) {
      if (! /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(user.email)) {
        setEmailError("Invalid format")
        isValid = false
      }

      if (user.password != "" || user.password != null) {
        if (/^(.{0,7}|[^0-9]*|[^A-Z]*|[^a-z]*|[a-zA-Z0-9]*)$/.test(user.password)) {
          setPasswordError("Invalid format")
          isValid = false
        }
      }

      if (user.contact != "" || user.email != null) {
        if (! /^\d{10}$/.test(user.contact)) {
          setContactError("Invalid Contact")
          isValid = false
        }
      }

      if (user.contact == "" || user.contact == undefined || user.contact == null) {
        setContactError("Contact Is required")
        isValid = false
      }

    }
    return isValid
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (isValidate(user)) {
      console.log(user)
    }

  }
  //     return (

  //         <div className="card" style={{width: '50rem', marginLeft:'30%'}}>

  //   <div className="card-body">
  //   <form onSubmit={handleSubmit}>
  //         <h3>Sign Up</h3>
  //         <div className="mb-3">
  //           <label>First name</label>
  //           <input
  //             type="text"
  //             name='firstname'
  //             onChange={handleChange}
  //             className="form-control"
  //             placeholder="First name"
  //           />
  //            {FirstNameError != "" && <p className="text-danger">{FirstNameError}</p>}
  //         </div>
  //         <div className="mb-3 lg-4">
  //           <label>Last name</label>
  //           <input type="text"
  //           name='lastname'
  //           onChange={handleChange}
  //           className="form-control" placeholder="Last name" />

  //           {LastNameError != "" && <p className="text-danger">{LastNameError}</p>}
  //         </div>
  //         <div className="mb-3">
  //           <label>Email address</label>
  //           <input
  //             type="email"
  //             name='email'
  //             onChange={handleChange}
  //             className="form-control"
  //             placeholder="Enter email"
  //           />

  //           {emailError != "" && <p className="text-danger">{emailError}</p>}
  //         </div>
  //         <div className="mb-3">
  //           <label>Contact</label>
  //           <input
  //             type="text"
  //             name='contact'
  //             onChange={handleChange}
  //             className="form-control"
  //             placeholder="Enter Number"
  //           />
  //           { ContactError != "" && <p className="text-danger">{ContactError}</p>}
  //         </div>
  //         <div className="mb-3">
  //           <label>Password</label>
  //           <input
  //             type="password"
  //             name='password'
  //             onChange={handleChange}
  //             className="form-control"
  //             placeholder="Enter password"
  //           />

  //           {passwordError != "" && <p className="text-danger">{passwordError}</p>}
  //         </div>
  //         <div className="d-grid">
  //           <button type="submit"
  //           onClick={handleSubmit}
  //           className="btn btn-primary">
  //             Sign Up
  //           </button>
  //         </div>
  //         <p className="forgot-password text-right">
  //           Already registered <a href="/sign-in">sign in?</a>
  //         </p>
  //       </form>

  //   </div>
  // </div>
  //          )







  return (
    <div className="login-img">
    <div style={{ marginTop: 100 }}>
      <div style={styles.containers}>

        <div className="mb-3">
          <h3 style={{ textAlign: "center", marginBottom: 50 }}>SignUp</h3>
        </div>
      </div>
      <br />
      <br />

      <div style={styles.container}>
        <div className="mb-3">
          <label> First Name</label>
          <input

            name="firstname"
            onChange={handleChange}
            className="form-control"
          />
          {FirstNameError != "" && <p className="text-danger">{FirstNameError}</p>}
        </div>

        <div className="mb-3">
          <label> Last Name</label>
          <input

            name="lastname"
            onChange={handleChange}
            className="form-control"
          />
          {LastNameError != "" && <p className="text-danger">{LastNameError}</p>}
          </div>


          <div className="mb-3">
            <label>Email</label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              
              className="form-control"
              required
            />
            {emailError != "" && <p className="text-danger">{emailError}</p>}
          </div>

          <div className="mb-3">
            <label> Contact</label>
            <input

              name="contact"
              onChange={handleChange}
              className="form-control"
            />
             { ContactError != "" && <p className="text-danger">{ContactError}</p>}
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              name="password"
              onChange={handleChange}
              type="password"
              className="form-control"
            ></input>
             {passwordError != "" && <p className="text-danger">{passwordError}</p>}
          </div>
          <div className="mb-3" >
            <button
              onClick={handleSubmit}
              className="button"
              type="submit"
              style={styles.signinButton}
            >
              SignUp
            </button>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default SignUp;

const styles = {
  containers: {
    backgroundColor: "#f3a81d",
    // color:"white",
    width: 600,
    height: 80,
    padding: 20,
    position: "relative",
    top: 0,
    left: 300,
    right: 0,
    bottom: 0,
    margin: "auto",
    borderColor: "#db0f62",
    borderRadius: 10,
    broderWidth: 1,
    borderStyle: "solid",
    boxShadow: "1px 1px 20px 5px #C9C9C9",
  },
  container: {
    backgroundColor: "#f3a81d",
    // color:"white",
    width: 600,
    height: 580,
    padding: 20,
    position: "relative",
    top: 0,
    left: 300,
    right: 0,
    bottom: 0,
    margin: "auto",
    borderColor: "#db0f62",
    borderRadius: 10,
    broderWidth: 1,
    borderStyle: "solid",
    boxShadow: "1px 1px 20px 5px #C9C9C9",
  },
  signinButton: {
    position: "relative",
    width: "100%",
    height: 40,
    backgroundColor: "#1F60F0",
    color: "#eee",
    borderRadius: 5,
    border: "none",
    marginTop: 10,
  },
};