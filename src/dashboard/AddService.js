import React, { useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import { Form, Button } from "react-bootstrap";

function AddService() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [categories, setCategories] = useState("");
  const [image, setImage] = useState([]);

  const onChnageFile = (e) => {
    setImage(e.target.files[0]);
  };

  const Submit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", image);
    formData.append("name", name);
    formData.append("description", description);
    formData.append("categories", categories);
    formData.append("price", price);

    Axios.post("http://localhost:8000/api/post", formData).then((done, err) => {
      if (done) {
        window.location.reload();
        alert("Success");
      } else {
        alert("failed");
        console.log(err);
      }
    });
  };

  return (
    <div className="AddService">
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
        <div
          className="dashBoard"
          style={{ padding: "10px", paddingTop: "80px" }}
        >
          <Form encType="multipart/form-data" method="post">
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Name : </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Service Name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Price : </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Service Price"
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description :</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                type="text"
                placeholder="Enter Service Description"
              />
            </Form.Group>
            {/* <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Description : </Form.Label>
              <Form.Control
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                type="text"
                placeholder="Enter Service Description"
              />
            </Form.Group> */}
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>categories : </Form.Label>
              <Form.Control
                onChange={(e) => {
                  setCategories(e.target.value);
                }}
                type="text"
                placeholder="Enter Service Category"
              />
            </Form.Group>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Service Image:</Form.Label>
              <Form.Control type="file" onChange={onChnageFile} />
            </Form.Group>
          </Form>
          <Button variant="dark" size="lg" onClick={Submit}>
            Submit The Service
          </Button>
        </div>
      </div>
    </div>
  );
}

export default AddService;
