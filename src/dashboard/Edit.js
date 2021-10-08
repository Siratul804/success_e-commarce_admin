import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import "./edit.css";

import { Form, Button } from "react-bootstrap";

import { Link } from "react-router-dom";

function Edit() {
  const [newName, setNewName] = useState({});
  const [newPrice, setNewPrice] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newCategories, setNewCategories] = useState("");
  const [newImage, setNewImage] = useState([]);

  console.log(newName, newPrice, newDescription);

  const [get, setGet] = useState([]);

  const onChnageFile = (e) => {
    setNewImage(e.target.files[0]);
  };

  useEffect(() => {
    async function getData() {
      const res = await Axios.get("http://localhost:8000/api/get");
      if (res) {
        setGet(res.data);
        console.log(res.data);
      } else {
        alert("Faild To Get Category");
      }
    }
    getData();
  }, []);

  const params = useParams();
  const [detailCategory, setDetailCategory] = useState([]);

  useEffect(() => {
    if (params) {
      get.forEach((get) => {
        if (get._id === params.id) setDetailCategory(get);
      });
    }
  }, [params, get]);

  console.log(detailCategory);

  const SubmitName = (id) => {
    Axios.put(`http://localhost:8000/api/update/text/${id}`, {
      newName: newName,
    }).then((done, err) => {
      if (done) {
        window.location.reload();
        alert("Text Update Success");
      } else {
        alert("failed");
        console.log(err);
      }
    });
  };
  const SubmitPrice = (id) => {
    Axios.put(`http://localhost:8000/api/update/text/${id}`, {
      newPrice: newPrice,
    }).then((done, err) => {
      if (done) {
        window.location.reload();
        alert("Text Update Success");
      } else {
        alert("failed");
        console.log(err);
      }
    });
  };
  const SubmitDescription = (id) => {
    Axios.put(`http://localhost:8000/api/update/text/${id}`, {
      newDescription: newDescription,
    }).then((done, err) => {
      if (done) {
        window.location.reload();
        alert("Text Update Success");
      } else {
        alert("failed");
        console.log(err);
      }
    });
  };
  const SubmitCategoris = (id) => {
    Axios.put(`http://localhost:8000/api/update/text/${id}`, {
      newCategories: newCategories,
    }).then((done, err) => {
      if (done) {
        window.location.reload();
        alert("Text Update Success");
      } else {
        alert("failed");
        console.log(err);
      }
    });
  };

  const SubmitImg = (id) => {
    const formData = new FormData();
    formData.append("image", newImage);
    Axios.put(`http://localhost:8000/api/update/img/${id}`, formData).then(
      (done, err) => {
        if (done) {
          window.location.reload();
          alert("Img Update Success");
        } else {
          alert("failed");
          console.log(err);
        }
      }
    );
  };

  return (
    <div className="">
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
          <Link to="/" className="dash_home_link">
            <h6> = Back to home</h6>
          </Link>
          <br />
        </div>
        <div className="dashBoard" style={{ marginTop: "3%" }}>
          <div className="oder_list">
            <div className="edit">
              <div className="edit_form">
                <Form encType="multipart/form-data" method="post">
                  <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Name : </Form.Label>
                    <Form.Control
                      defaultValue={detailCategory.name}
                      type="text"
                      placeholder="Enter Service Name"
                      onChange={(e) => {
                        setNewName(e.target.value);
                      }}
                    />
                  </Form.Group>
                  <Button
                    variant="dark"
                    onClick={() => {
                      SubmitName(detailCategory._id);
                    }}
                  >
                    Submit The Service Name
                  </Button>
                  <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Price : </Form.Label>
                    <Form.Control
                      type="text"
                      defaultValue={detailCategory.price}
                      placeholder="Enter Service Price"
                      onChange={(e) => {
                        setNewPrice(e.target.value);
                      }}
                    />
                  </Form.Group>
                  <Button
                    variant="dark"
                    onClick={() => {
                      SubmitPrice(detailCategory._id);
                    }}
                  >
                    Submit The Service Price
                  </Button>

                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>Description : </Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      defaultValue={detailCategory.description}
                      onChange={(e) => {
                        setNewDescription(e.target.value);
                      }}
                      type="text"
                      placeholder="Enter Service Description"
                    />
                  </Form.Group>
                  <Button
                    variant="dark"
                    onClick={() => {
                      SubmitDescription(detailCategory._id);
                    }}
                  >
                    Submit The Service Description
                  </Button>

                  <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Categories : </Form.Label>
                    <Form.Control
                      defaultValue={detailCategory.categories}
                      onChange={(e) => {
                        setNewCategories(e.target.value);
                      }}
                      type="text"
                      placeholder="Enter Service Categoris"
                    />
                  </Form.Group>

                  <Button
                    variant="dark"
                    onClick={() => {
                      SubmitCategoris(detailCategory._id);
                    }}
                  >
                    Submit The Service Categoris
                  </Button>
                  <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Service Image:</Form.Label>
                    <Form.Control type="file" onChange={onChnageFile} />
                  </Form.Group>
                </Form>
                <Button
                  variant="dark"
                  onClick={() => {
                    SubmitImg(detailCategory._id);
                  }}
                >
                  Submit The Service Image
                </Button>
              </div>
              <div className="border_middle"></div>
              <div className="edit_items">
                <div>
                  <b>Service Name:</b>
                  <br />
                  <p>{detailCategory.name}</p>
                </div>
                <div>
                  <b>Service Description:</b>
                  <br />
                  <p>{detailCategory.description}</p>
                </div>
                <div>
                  <b>Service Categoris:</b>
                  <br />
                  <p>{detailCategory.categories}</p>
                </div>
                <div>
                  <b>Service Price:</b>

                  <p>{detailCategory.price} $</p>
                </div>
                <div>
                  <b>Service Image:</b>
                  <br />
                  <img
                    src={`http://localhost:8000/uploads/${detailCategory.image}`}
                    alt=""
                    height="150px"
                    width="150px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Edit;
