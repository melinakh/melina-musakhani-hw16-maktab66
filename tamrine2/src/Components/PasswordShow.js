import React from "react";
import { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";

const Passwordshow = () => {
  let [showPass, setshowPass] = useState(false);

  return (
    <>
      <Form.Group className="position-relative">
        <Form.Control
          type={showPass ? "text" : "password"}
          placeholder="کلمه عبور"
          className="inp passinp"
          required
        />
        <span className="icon" onClick={() => setshowPass(!showPass)}>
          {showPass ? <AiFillEyeInvisible /> : <AiFillEye />}
        </span>
      </Form.Group>
    </>
  );
};

export default Passwordshow;
