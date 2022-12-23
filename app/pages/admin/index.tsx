import React, { useEffect, useState } from "react";
import axios from "axios";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Table from "react-bootstrap/Table";
import OneUserrow from "../../components/OneUserrow";
import Add from "../../components/Add";
import SomeProducts from "../../components/SomeProducts";
const admin=() => {

  const [users,setUsers]=useState([])
useEffect(()=>{
  axios.get('http://localhost:3000/api/user').then((response) => {setUsers(response.data)
  });
},[])
const deleteUser = (user:any) =>{
  console.log(user);

  
  axios.delete(`http://localhost:3000/api/user/${user}`).then(res=>{
    axios.get("http://localhost:3000/api/user").then((response) => {
      setUsers(response.data);
    });
  
  alert(user + " deleted successfully");}).catch(err=>{console.error(err)});
}
  return (
    <>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta name="description" content="" />
      <meta name="author" content="" />
      <title>Dashboard |mangadana</title>
      <link
        href="https://cdn.jsdelivr.net/npm/simple-datatables@latest/dist/style.css"
        rel="stylesheet"
      />
      <link href="css2/styles.css" rel="stylesheet" />

      <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
          <nav
            className="sb-sidenav accordion sb-sidenav-dark"
            id="sidenavAccordion"
          >
            <div className="sb-sidenav-menu">
              <div className="nav">
                <a className="nav-link" href="#add">
                  <div className="sb-nav-link-icon">
                    <i className="fas fa-tachometer-alt" />
                  </div>
                  Add Products
                </a>
                <a className="nav-link" href="#users">
                  <div className="sb-nav-link-icon">
                    <i className="fas fa-tachometer-alt" />
                  </div>
                  Users
                </a>
                <a className="nav-link" href="#products">
                  <div className="sb-nav-link-icon">
                    <i className="fas fa-tachometer-alt" />
                  </div>
                  Products
                </a>
              </div>
            </div>
          </nav>
        </div>
        <div id="layoutSidenav_content">
          <main>
            <div className="container-fluid px-4">
              <h1 className="mt-4">Dashboard</h1>
              <ol className="breadcrumb mb-4">
                <li className="breadcrumb-item active">Dashboard</li>
              </ol>

              <div className="row">
                <div className="col-xl-12" id="add">
                  <div className="card mb-4">
                    <div className="card-header">
                      <i className="fas fa-chart-area me-1" />
                      Add a Product
                    </div>
                    <div className="card-body">
                      <Add />
                    </div>
                  </div>
                </div>
                <div className="col-xl-12" id="users">
                  <div className="card mb-4">
                    <div className="card-header">
                      <i className="fas fa-chart-area me-1" />
                      Users
                    </div>
                    <div className="card-body">
                      <table className="table table-hover">
                        <thead className="table-dark">
                          <tr>
                            <th scope="col">photo</th>
                            <th scope="col">email</th>
                            <th scope="col">name</th>
                            <th scope="col">balence</th>
                            <th scope="col">actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {users.map((user: any) => (
                            <OneUserrow user={user} deleteUser={deleteUser} />
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div className="col-xl-12" id="products">
                  <div className="card mb-4">
                    <div className="card-header">
                      <i className="fas fa-chart-bar me-1" />
                      Products
                    </div>
                    <div className="card-body">
                     <SomeProducts/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default admin;
 