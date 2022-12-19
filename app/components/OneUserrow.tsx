import axios from 'axios'
import React, { useState } from 'react'

const OneUserrow = ({user,deleteUser}) => {
    const updateUser=(user:any,body:any) => {
        console.log(user),console.log(body);
        
        
        axios
          .put(`http://localhost:3000/api/user/${user}`, body)
          .then((response) => {
            alert(user + "updated");
          })
          .catch((err) => {
            console.log(err);
          });
    }
    const [username,setUsername]=useState(user.username)
    const [email,setEmail]=useState(user.email)
    const [balance,setBalance]=useState(user.balance)
  return (
    <tr key={user._id}>
      <th scope="row">
        <img
          src={user.image}
          alt=""
          height={50}
          width={50}
          className="rounded-circle"
        />
      </th>
      <td>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          defaultValue={email}
        />
      </td>
      <td>
        {" "}
        <input
          type="text"
          onChange={(e) => setUsername(e.target.value)}
          defaultValue={username}
        />
      </td>
      <td>
        {" "}
        <input
          type="number"
          onChange={(e) => setBalance(Number(e.target.value))}
          width="90%"
          defaultValue={balance}
        />
      </td>
      <td>
        <div className="row">
          <button className="col btn btn-outline-success" onClick={()=>{updateUser(user.username,{username,email,balance})}}>upd</button>
          <button
            className="col btn  btn-outline-danger"
            onClick={() => deleteUser(user.username)}
          >
            del
          </button>
        </div>
      </td>
    </tr>
  );
}

export default OneUserrow