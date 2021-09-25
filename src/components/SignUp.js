import React, { useState, useContext } from "react";

import UserContext from "../context/UserContext";
import { Form, Button, Alert } from "react-bootstrap";
import Axios from "axios";
import ErrorNotice from "../misc/ErrorNotice";

function SignUp() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordCheck, setPasswordCheck] = useState();
  const [displayName, setDisplayName] = useState();
  const { userData, setUserData } = useContext(UserContext);

  const [error, setError] = useState();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const newUser = { name, email, password, passwordCheck, displayName };
      await Axios.post("http://localhost:8000/api/admin/SignUp", newUser);
      const loginRes = await Axios.post(
        "http://localhost:8000/api/admin/SignIn",
        {
          email,
          password,
        }
      );
      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user,
      });
      localStorage.setItem("auth-token", loginRes.data.token);
    } catch (err) {
      err.response.data.msg && setError(err.response.data.msg);
    }
  };

  return (
    <>
      {userData.user ? (
        <>
          <div className="SignUp my-2 ">
            <h2 className="text-center text-dark ">
              <b>Sign-Up</b>
            </h2>
            <br />
            <div
              className="formm container"
              style={{ border: "groove", padding: "3% 3% 3% 3% " }}
            >
              {error && (
                <ErrorNotice
                  message={error}
                  clearError={() => setError(undefined)}
                />
              )}
              <Form onSubmit={submit}>
                <Form.Group controlId="formBasicText">
                  <Form.Label>Enter Your Name:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Name"
                    onChange={(e) => setName(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Control
                    type="password"
                    placeholder="Verify Password"
                    onChange={(e) => setPasswordCheck(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicText">
                  <Form.Label>Display Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Display Name"
                    onChange={(e) => setDisplayName(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox"></Form.Group>
                <br />
                <Button variant="dark" type="submit">
                  Submit
                </Button>
              </Form>
            </div>
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

export default SignUp;
