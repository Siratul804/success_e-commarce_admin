import React, { useContext } from "react";
import UserContext from "../context/UserContext";
import { Card, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";

function Home() {
  const { userData } = useContext(UserContext);
  return (
    <>
      {userData.user ? (
        <>
          <div className="Home container" style={{ marginTop: "150px" }}>
            <Card style={{ padding: "5% 5% 5% 5% " }}>
              <h1>Welcome!</h1>
              <p>
                This is a simple dashboard access page, a simple
                adding,delete,edit component for calling extra attention to
                featured content or information.
              </p>
              <p>
                <Link to="/Dashboard">
                  <Button variant="primary">Dashboard</Button>
                </Link>
              </p>
            </Card>
          </div>
        </>
      ) : (
        <>
          <div
            className="errorr container text-center "
            style={{ paddingTop: "10%" }}
          >
            <Alert variant="warning">
              <Alert.Heading>Oh snap! You need to login!</Alert.Heading>
              <p>
                <i>
                  Sign In First & Then Come.
                  <br />
                  If Not Sign In , Then Please Sign Up .
                  <br />
                  <b>Thank You. 😃😃😃</b>
                  <br />
                </i>
              </p>
            </Alert>
          </div>
        </>
      )}
    </>
  );
}

export default Home;
