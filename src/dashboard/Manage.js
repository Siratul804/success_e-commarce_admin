import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./manage.css";
import { Button } from "react-bootstrap";
import { Scrollbars } from "react-custom-scrollbars-2";
import { ServerContext } from "../contex/ServerContext";
import axios from "axios";

function Manage() {
  const { get } = useContext(ServerContext);
  const [getValue] = get;

  const DeleteService = (id) => {
    axios.delete(`http://localhost:8000/api/delete/${id}`);
    window.location.reload();
  };

  return (
    <div className="manage">
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
          <a href="/Oder" className="dash_link">
            <h5>Oder List</h5>
          </a>
          <br />
          <a href="/users" className="dash_link">
            <h5>Users</h5>
          </a>
          <Link to="/" className="dash_home_link">
            <h6> = Back to home</h6>
          </Link>
          <br />
        </div>
        <div className="dashBoard" style={{ marginTop: "5%" }}>
          <Scrollbars>
            <div className="oder_list">
              <div className="oder_header">
                <h5>
                  <b> Name </b>
                </h5>
                <h5>
                  <b> Price </b>
                </h5>
                <h5>
                  <b> Description </b>
                </h5>
                <h5>
                  <b> Action </b>
                </h5>
              </div>
              <hr />
              {getValue.map((service) => {
                return (
                  <>
                    <div className="oder_bdy">
                      <div style={{ flex: "1" }}>
                        <p>{service.name}</p>
                      </div>
                      <div style={{ flex: "0.9" }}>
                        <p>{service.price} $ </p>
                      </div>
                      <div style={{ flex: "0.9" }}>
                        <p> {service.description}</p>
                      </div>

                      <div style={{ flex: "0.5" }}>
                        <Link to={`/Edit/${service._id}`}>
                          <Button
                            variant="outline-success"
                            style={{ marginRight: "10px" }}
                          >
                            Edit
                          </Button>
                        </Link>
                        <Button
                          variant="outline-danger"
                          onClick={() => {
                            DeleteService(service._id);
                          }}
                        >
                          Delete
                        </Button>
                      </div>
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

export default Manage;
