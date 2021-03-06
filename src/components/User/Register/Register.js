import { Button, Spinner } from "react-bootstrap";
import "./Register.css";
import { values, size } from "lodash";
import { toast } from "react-toastify";
import axios from "axios";
import { BrowserRouter as Link } from "react-router-dom";

import React, { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
export default function Register(props) {
  const [formData, setFormData] = useState(initialFormValue());
  const [signUpLoading, setSignUpLoading] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    console.log(size(formData));
    let validCount = 0;

    values(formData).some((value) => {
      value && validCount++;
      return null;
    });
    console.log(validCount);

    if (validCount !== 4) {
      toast.warning("Debe llenar los formularios porfavor");
    } else {
      setSignUpLoading(true);
      axios.post("http://localhost:4000/api/user", formData).then(
        (response) => {
          console.log(response);
          toast.warning("Registrado correctamente");
        },
        (error) => {
          console.log(error.data);
          setSignUpLoading(false);

          toast.error("Error del servidor, inténtelo más tarde");
        }
      );
      //   }
    }
  };
  const onChange = (e) => {
    console.log(e.target.name);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div className="container">
      <br />
      <br />
      <br />
      <br />
      <div className="row">
        <div className="col-lg-10 col-xl-9 mx-auto">
          <div className="card card-signin flex-row my-5">
            <div className="card-img-left-register d-none d-md-flex"></div>
            <div className="card-body">
              <h5 className="card-title text-center login-color">Register</h5>
              <br />
              <br />
              <br />
              <br />

              <form
                className="form-signin"
                onSubmit={onSubmit}
                onChange={onChange}
              >
                <div className="form-label-group">
                  <input defaultValue={formData.name} type="text" name="name" />
                  <label htmlFor="inputName">Name</label>
                </div>

                <div className="form-label-group">
                  <input
                    type="text"
                    name="lastName"
                    defaultValue={formData.lastName}
                  />
                  <label htmlFor="inputLastname">Last Name</label>
                </div>

                <div className="form-label-group">
                  <input
                    name="email"
                    type="email"
                    defaultValue={formData.email}
                  />
                  <label htmlFor="inputEmail">Email address</label>
                </div>

                <div className="form-label-group">
                  <input
                    type="password"
                    name="password"
                    defaultValue={formData.password}
                  />
                  <label htmlFor="inputPassword">Password</label>
                </div>

                <div className="form-label-group">
                  <input
                    id="passwordConfirmation"
                    type="password"
                    name="passwordConfirmation"
                  />
                  <label htmlFor="inputPasswordRepeat">Repeat Password</label>
                </div>

                <div className="form-group col-lg-12 mx-auto mb-0">
                  <Button
                    variant="primary"
                    type="submit"
                    className="btn btn-lg text-uppercase btn-dark center-align"
                  >
                    {!signUpLoading ? (
                      "Registrarse"
                    ) : (
                      <Spinner animation="border" />
                    )}
                  </Button>
                </div>

                <div className="form-group col-lg-12 mx-auto d-flex align-items-center my-4">
                  <div className="border-bottom w-100 ml-5"></div>
                  <span className="px-3 small text-muted font-weight-bold ">
                    OR
                  </span>
                  <div className="border-bottom w-100 mr-5"></div>
                </div>
                <Link to="/login">
                  <div className="text-center w-100">
                    <p className="text-muted font-weight-bold">
                      Already Registered?
                      <a href="login" className="text-primary ml-2">
                        Login
                      </a>
                    </p>
                  </div>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function initialFormValue() {
  return {
    name: "",
    lastName: "",
    email: "",
    password: "",
  };
}
