import React from "react";
import "./Global.css";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

function Dashboard() {
  return (
    <>
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
        <div className="dashBoard" style={{ padding: "10px" }}>
          <Card
            style={{
              marginTop: "200px",
              borderRadius: "10px",
              padding: "10px",
            }}
            className="container"
          >
            <h1>Welcome to, Dashboard!</h1>
            <br />

            <p>
              This is a simple hero unit, a simple jumbotron-style component for
              calling extra attention to featured content or information.
            </p>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
