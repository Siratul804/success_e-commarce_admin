import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";
import { Form, Button } from "react-bootstrap";
import Axios from "axios";
import ErrorNotice from "../misc/ErrorNotice";

function SignIn() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const { setUserData } = useContext(UserContext);

  const [error, setError] = useState();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const loginUser = { email, password };
      const loginRes = await Axios.post(
        "http://localhost:8000/api/admin/SignIn",
        loginUser
      );
      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user,
      });
      window.location.href = "/";
      localStorage.setItem("auth-token", loginRes.data.token);
    } catch (err) {
      err.response.data.msg && setError(err.response.data.msg);
    }
  };

  return (
    <div className="signUP my-5 ">
      <h2 className="text-center text-dark ">
        <b>Sign-In</b>
      </h2>
      <br />
      <div
        className="formm container"
        style={{ border: "groove", padding: "3% 3% 3% 3% " }}
      >
        {error && (
          <ErrorNotice message={error} clearError={() => setError(undefined)} />
        )}
        <Form onSubmit={submit}>
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
          <Form.Group controlId="formBasicCheckbox"></Form.Group>
          <br />
          <Button variant="dark" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default SignIn;
