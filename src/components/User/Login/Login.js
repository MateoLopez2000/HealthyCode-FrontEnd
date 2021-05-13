import "./Login.css";
import { isEmailValid } from "../../../utils/validation";
import { API_HOST } from "../../../utils/constant";

import { Spinner } from "react-bootstrap";
import { BrowserRouter as Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

import { toast } from "react-toastify";
import React, { useState } from "react";

import axios from "axios";
import { size, values } from "lodash";

export default function Login(props) {
  const { setRefreshCheckLogin } = props;
  const [formData, setFormData] = useState(initialFormValue());
  const [signInLoading, setSignInLoading] = useState(false);
  const history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();

    let validCount = 0;
    values(formData).some((value) => {
      value && validCount++;
      return null;
    });

    if (size(formData) !== validCount) {
      toast.warning("Completa todo los campos del formulario");
    } else {
      if (!isEmailValid(formData.email)) {
        toast.warning("Email es invalido");
      } else {
        setSignInLoading(true);
        const url = `${API_HOST}/api/signin `;
        axios.post(url, formData).then(
          (response) => {
            console.log(response);
            history.push("/");

            toast.warning(response.message);
          },
          (error) => {
            console.log(error.data);
            setSignInLoading(false);

            toast.error("Error del servidor, inténtelo más tarde");
          }
        );
      }
    }
  };
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <div class="background">
        <div class="row">
          <div class="col-lg-10 col-xl-9 mx-auto">
            <div class="card card-signin flex-row my-5">
              <div class="card-img-left d-none d-md-flex"></div>
              <div class="card-body">
                <h5 class="card-title text-center login-color">Login</h5>
                <br />
                <br />
                <br />
                <br />

                <form
                  class="form-signin"
                  onSubmit={onSubmit}
                  onChange={onChange}
                >
                  <div class="form-label-group">
                    <input
                      type="email"
                      name="email"
                      class="form-control"
                      defaultValue={formData.email}
                    />
                    <label for="inputEmail">Email address</label>
                  </div>
                  <br />
                  <div class="form-label-group">
                    <input
                      type="password"
                      class="form-control"
                      name="password"
                      defaultValue={formData.password}
                    />
                    <label for="inputPassword">Password</label>
                  </div>
                  <button
                    class="btn text-uppercase btn-login center-align"
                    type="submit"
                  >
                    {!signInLoading ? (
                      "Login"
                    ) : (
                      <Spinner animation="border" size="sm" />
                    )}{" "}
                  </button>
                  <br />
                  <br />
                  <Link to="/register">
                    <p class="text-muted font-weight-bold">
                      Don't you have an account?{" "}
                      <a href="#" class="ml-2 register-color">
                        Register
                      </a>
                    </p>
                  </Link>
                  <hr class="my-4" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function initialFormValue() {
  return {
    email: "",
    password: "",
  };
}
