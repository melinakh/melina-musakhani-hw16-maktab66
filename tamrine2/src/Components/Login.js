import React, { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import Passwordshowlogin from "./PasswordShowLogin";
import { useState, useEffect } from "react";

const Login = () => {
  const [validation, setvalidation] = useState("");
  const emailRef = useRef("");

  const handelChange = () => {
    setvalidation(emailRef.current.value);
  };
  const handelClick = () => {
    if (emailRef.current.value !== "") {
      alert("با موفقیت وارد شدید");
    }
  };
  return (
    <>
      <div className="parent">
        <h1>خوش آمدید</h1>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              value={validation}
              onChange={handelChange}
              ref={emailRef}
              required
              className="inp"
              placeholder="پست الکترونیک"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Passwordshowlogin />

            <Form.Text className="text-success" style={{ marginRight: "20px" }}>
              فراموش کردید؟
            </Form.Text>
          </Form.Group>
          <Button
            variant="success"
            className="lastbtn"
            type="submit"
            onClick={handelClick}
          >
            ورود
          </Button>
        </Form>
      </div>
    </>
  );
};

export default Login;
