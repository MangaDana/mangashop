import React, { useEffect, useState } from 'react'
import { UserContext } from "../UserContext";
import { useContext } from "react";
import axios from 'axios';
import jwt from 'jwt-decode';
const profile = () => {
  const { user, setUser } = useContext(UserContext);
  const[users,setUsers]=useState('')
  console.log(users);
  useEffect(()=>{
    const token = localStorage.getItem("token");
  if (token) {
    const users = jwt(token);

    if (!users) {
      localStorage.removeItem("token");
    } else {
      axios
      .get(`http://localhost:3000/api/user/${users.email}`)
      .then((res) => {
        setUsers(res.data[0]);
        setUsername(res.data[0].username);
        setbalance(res.data[0].balance);
        setEmail(res.data[0].email);
      })
      .catch((err) => console.log(err));
    }
  }
},[])
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [balance, setbalance] = useState("");
const [email, setEmail] = useState("");
console.log(username);

  return (
    <div>
      <>
        <link href="css3/style2.css" rel="stylesheet" />

        <link
          href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css"
          rel="stylesheet"
          id="bootstrap-css"
        />
        {/*---- Include the above in your HEAD tag --------*/}
        <div className="container emp-profile">
          <div className="row">
            <div className="col-md-4">
              <div className="profile-img">
                <img src={users.image} alt="" />
                <div className="file btn btn-lg btn-primary">
                  Change Photo
                  <input type="file" name="file" />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    id="home-tab"
                    data-toggle="tab"
                    href="#home"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                  >
                    About
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-8">
              <div className="tab-content profile-tab" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <label>User Id</label>
                    </div>
                    <div className="col-md-6">
                      <p>{users._id}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Name</label>
                    </div>
                    <div className="col-md-6">
                      <input
                        onChange={(e) => {
                          setUsername(e.target.value);
                        }}
                        defaultValue={username}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Email</label>
                    </div>
                    <div className="col-md-6">
                      <input
                        onChange={(e) => {
                        setEmail(e.target.value);
                        }}
                        defaultValue={email}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Balance</label>
                    </div>
                    <div className="col-md-6">
                      <input
                        onChange={(e) => {
                          setbalance(e.target.value);
                        }}
                        defaultValue={balance}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-10"></div>
            <div className="col-2">
              <button className="btn btn-outline-primary">update</button>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default profile