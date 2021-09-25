import React, { useContext } from "react";

import UserContext from "../context/UserContext";

import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Button } from "react-bootstrap";

function Header() {
  const { userData, setUserData } = useContext(UserContext);

  const logout = () => {
    setUserData({
      token: undefined,
      user: undefined,
    });
    localStorage.setItem("auth-token", "");
  };

  return (
    <div>
      {userData.user ? (
        <>
          <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
              <Container>
                <Navbar.Brand href="/">
                  <b> e-temp </b>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto"></Nav>
                  <Nav>
                    <li className="nav-item">
                      <Link to="/" className="nav-link  ">
                        Home
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/SignIn" className="nav-link  ">
                        Sign In
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/SignUp" className="nav-link  ">
                        Sign Up
                      </Link>
                    </li>

                    <Button variant="danger" onClick={logout}>
                      Log Out
                    </Button>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </div>
        </>
      ) : (
        <>
          <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
              <Container>
                <Navbar.Brand href="/">
                  <b> e-temp </b>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto"></Nav>
                  <Nav>
                    <li className="nav-item">
                      <Link to="/" className="nav-link  ">
                        Home
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/SignIn" className="nav-link  ">
                        Sign In
                      </Link>
                    </li>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </div>
        </>
      )}
    </div>
  );
}

export default Header;
