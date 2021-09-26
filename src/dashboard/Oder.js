import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import { Table, Button } from "react-bootstrap";
import "./oder.css";

import { Scrollbars } from "react-custom-scrollbars-2";

function Oder() {
  const [res, setRes] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:8000/api/get/oder")
      .then((res) => {
        setRes(res.data);
        console.log(res.data);
      })
      .catch(() => {
        console.log("ERR");
      });
  }, []);

  const DeleteOder = (id) => {
    Axios.delete(`http://localhost:8000/api/delete/oder/${id}`);
    window.location.reload();
  };

  return (
    <div className="oder">
      <div className="DashHeader">
        <div className="Dashboard container">
          <Link className="text-dark" to="/Dashboard">
            <h3 style={{ marginBottom: "89px" }}> Dashboard </h3>
          </Link>

          <Link to="/Add" className="dash_link">
            <h5>Add Service</h5>
          </Link>
          <br />
          <Link to="/Manage" className="dash_link">
            <h5>Manage Service</h5>
          </Link>
          <br />
          <Link to="/Oder" className="dash_link">
            <h5>Oder List</h5>
          </Link>
          <br />
          <Link to="/users" className="dash_link">
            <h5>Users</h5>
          </Link>
          <Link to="/" className="dash_home_link">
            <h6> = Back to home</h6>
          </Link>
          <br />
        </div>
        <div className="dashBoard" style={{ marginTop: "5%" }}>
          <Scrollbars>
            <div className="container">
              {res.map((res) => {
                return (
                  <>
                    <div
                      style={{
                        borderStyle: "double",
                        padding: "15px",
                        marginTop: "15px",
                      }}
                    >
                      <i
                        className="text-muted"
                        style={{ fontFamily: "sans-serif" }}
                      >
                        <b>Oder Info :</b>
                      </i>
                      <Table striped bordered hover>
                        <thead>
                          <tr>
                            <th>#</th>
                            <th> Name</th>
                            <th>Quanity</th>
                            <th>Price</th>
                            <th>Total</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td className="text">{res.Name.join(" , ")}</td>
                            <td className="text">{res.Quanity.join(" , ")}</td>
                            <td className="text">
                              ${res.Price.join(" , ")} BDT{" "}
                            </td>
                            <td>$ {res.Total} BDT </td>
                          </tr>
                        </tbody>
                      </Table>
                      <i
                        className="text-muted"
                        style={{ fontFamily: "sans-serif" }}
                      >
                        <b>Client Info :</b>
                      </i>
                      <Table striped bordered hover>
                        <thead>
                          <tr>
                            <th>#</th>
                            <th> Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Address</th>
                            <th>Special</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>{res.PName}</td>
                            <td>{res.Email}</td>
                            <td>{res.Phone}</td>
                            <td>{res.Address}</td>
                            <td>{res.Special}</td>
                          </tr>
                        </tbody>
                      </Table>
                      <Button
                        variant="outline-danger"
                        onClick={() => {
                          DeleteOder(res._id);
                        }}
                      >
                        Delete
                      </Button>
                    </div>
                  </>
                );
              })}
            </div>
          </Scrollbars>
        </div>
      </div>
    </div>
  );
}

export default Oder;
