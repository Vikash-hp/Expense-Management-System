import React, { useState, useEffect } from "react";
import { Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "../components/Spinner";
import "../styles/LoginnPage.css";
import loginPageImage from "../assets/images/loginPageImage.jpg";

const Loginn = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  //from submit
  const submitHandler = async (values) => {
    try {
      setLoading(true);
      const { data } = await axios.post("/users/login", values);
      setLoading(false);
      message.success("login success");
      localStorage.setItem(
        "user",
        JSON.stringify({ ...data.user, password: "" })
      );
      navigate("/");
    } catch (error) {
      setLoading(false);
      message.error("something went wrong");
    }
  };

  //prevent a user to login without registration
  useEffect(() => {
    if (localStorage.getItem("user")) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <>
      <div className="container">
        <div className="register-page">
          <img src={loginPageImage} alt="loading..." />
          <div className="form-container">
            {loading && <Spinner />}
            <Form layout="vertical" onFinish={submitHandler}>
              <h1>Login Form</h1>
              <Form.Item label="Email" name="email">
                <Input type="email" />
              </Form.Item>
              <Form.Item label="Password" name="password">
                <Input type="password" />
              </Form.Item>
              <div className="d-flex justify-content-between">
                <Link to="/register">Not a user ? Click here to register</Link>
                <button className="btn btn-primary">Login</button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loginn;
