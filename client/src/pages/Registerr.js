import React, {useState,useEffect} from "react";
import { Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "../components/Spinner";
import "../styles/RegisterrPage.css"; 



const Registerr = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  //from submit
  const submitHandler = async (values) => {
    try {
      setLoading(true);
      await axios.post("/users/register", values);
      message.success("Registeration Successfull");
      setLoading(false);
      navigate("/login");
    } catch (error) {
      setLoading(false);
      message.error("something went wrong");
    }
  };

  //block registration page if user already logged in
  useEffect(()=>{
    if(localStorage.getItem('user')){
        navigate("/");
    }
  },[navigate]);



  return (
    <>
      <div className="container">
      <div className="register-page ">
        
        {loading && <Spinner />}
        <Form layout="vertical" onFinish={submitHandler}>
          <h1>Register Form</h1>
          <Form.Item label="Name" name="name">
            <Input />
          </Form.Item>
          <Form.Item label="Email" name="email">
            <Input type="email" />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input type="password" />
          </Form.Item>
          <div className="d-flex justify-content-between">
            <Link to="/login">Already Register ? Cleck Here to login</Link>
            <button className="btn btn-primary">Register</button>
          </div>
        </Form>
      </div>
      
      </div>
      
    </>
  );
};

export default Registerr; 