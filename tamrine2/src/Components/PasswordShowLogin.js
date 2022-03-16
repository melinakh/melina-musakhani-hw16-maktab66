import React from "react";
import { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
const Passwordshowlogin = () => {
  let [showPass, setshowPass] = useState(false);

  return (
    <>
      <Form.Control
        type={showPass ? "text" : "password"}
        placeholder="کلمه عبور"
        className="inp passinp"
      />
      <span onClick={() => setshowPass(!showPass)}>
        {showPass ? (
          <AiFillEyeInvisible className="icon2" />
        ) : (
          <AiFillEye className="icon2" />
        )}
      </span>
    </>
  );
};

export default Passwordshowlogin;
