import React from "react";
import { useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import Register from "./Register";
import Login from "./Login";

const Handelbuttons = () => {
  const [isShow, setIsShow] = useState(true);
  const colorRef = useRef();
  const colorLog = useRef();
  const handelRegister = () => {
    setIsShow(false);
    colorRef.current.style.backgroundColor = "#198754";
    colorLog.current.style.backgroundColor = "gray";
  };
  const handelLogin = () => {
    setIsShow(true);
    colorRef.current.style.backgroundColor = "gray";
    colorLog.current.style.backgroundColor = "#198754";
  };
  return (
    <>
      <div className="btns mt-4">
        <Button
          id="log"
          ref={colorLog}
          className="btn-success main"
          onClick={handelLogin}
        >
          ورود
        </Button>
        <Button
          ref={colorRef}
          id="reg"
          className="btn-secondary main"
          onClick={handelRegister}
        >
          ثبت نام
        </Button>
      </div>
      {isShow ? <Login /> : <Register />}
    </>
  );
};

export default Handelbuttons;
