import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import { Scrollbars } from "react-custom-scrollbars-2";
import { Link } from "react-router-dom";
import { API_URL } from "../constants";

function Users() {
  const [res, setRes] = useState([]);

  useEffect(() => {
    const url = `${API_URL}/api/admin/getUser`;
    Axios.get(url)
      .then((res) => {
        setRes(res.data);
        console.log(res.data);
      })
      .catch(() => {
        console.log("ERR");
      });
  }, []);

  const DeleteUser = (id) => {
    const url = `${API_URL}/api/admin/userDelete/${id}`;
    Axios.delete(url);
    window.location.reload();
  };

  return (
    <div className="Users">
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
            <h5>
              Users
              <span
                style={{
                  backgroundColor: "red",
                  padding: "5px",
                  borderRadius: "20px",
                }}
              >
                {res.length}
              </span>
            </h5>
          </Link>
          <Link to="/" className="dash_home_link">
            <h6> = Back to home</h6>
          </Link>
          <br />
        </div>
        <div className="dashBoard" style={{ marginTop: "5%" }}>
          <Scrollbars>
            <div className="container">
              <div
                style={{
                  padding: "15px",
                  marginTop: "15px",
                }}
              >
                <i className="text-muted" style={{ fontFamily: "sans-serif" }}>
                  <b>User Info :</b>
                </i>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th> Name</th>
                      <th>Number</th>
                      <th>Email</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {res.map((user) => {
                      return (
                        <>
                          <tr>
                            <td className="text">{user.name}</td>
                            <td className="text">{user.number}</td>
                            <td className="text">{user.email}</td>
                            <td className="text">
                              <Button
                                variant="outline-danger"
                                onClick={() => {
                                  DeleteUser(user._id);
                                }}
                              >
                                Delete
                              </Button>
                            </td>
                          </tr>
                        </>
                      );
                    })}
                  </tbody>
                </Table>
              </div>
            </div>
          </Scrollbars>
        </div>
      </div>
    </div>
  );
}

export default Users;
