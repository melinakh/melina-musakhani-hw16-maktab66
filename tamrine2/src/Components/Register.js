import React from "react";
import { Form, Button } from "react-bootstrap";
import Passwordshow from "./PasswordShow";
import { useState, useEffect, useRef } from "react";

const Register = () => {
  const [showEdu, setShowEdu] = useState(false);
  const [data, setdata] = useState("");
  const [city, setcity] = useState([]);
  const [validation, setvalidation] = useState("");
  const emailRef = useRef("");
  let handelEducation = () => {
    setShowEdu(true);
  };
  useEffect(() => {
    fetch("/city.json")
      .then((response) => response.json())
      .then((result) => {
        setdata(result);
      });
  }, []);
  const handelChangeInp = () => {
    setvalidation(emailRef.current.value);
  };
  const handelClick = () => {
    if (emailRef.current.value !== "") {
      alert("با موفقیت وارد شدید");
    }
  };
  const handelChange = (event) => {
    const indexOfSelect = event.target.value;
    let arr = [];
    arr = indexOfSelect.split(",");

    setcity(arr);
  };

  return (
    <div>
      <h1> رایگان ثبت نام کنید</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="d-flex nameParent">
            <Form.Control
              required
              type="text"
              className="inp"
              placeholder="نام"
              ref={emailRef}
              onChange={handelChangeInp}
            />
            <Form.Control
              required
              type="text"
              className="inp"
              placeholder="نام خانوداگی"
              ref={emailRef}
              onChange={handelChangeInp}
            />
          </Form.Label>
          <Form.Control
            required
            type="email"
            className="inp"
            placeholder="پست الکترونیک"
            ref={emailRef}
            onChange={handelChangeInp}
          />
        </Form.Group>

        <Form.Group>
          <Form.Control
            required
            as="select"
            className="inp"
            onChange={handelEducation}
          >
            <option value="" disabled selected hidden>
              تحصیلات
            </option>
            <option value="secondVal">کارشناسی</option>
            <option value="thirdVal">کارشناسی ارشد</option>
          </Form.Control>
        </Form.Group>
        {showEdu ? (
          <Form.Control
            type="text"
            required
            className="inp"
            placeholder=" محل تحصیل"
          />
        ) : null}

        <Form.Group
          className="mt-3 d-flex nameParent"
          controlId="formBasicEmail"
        >
          <Form.Control
            onChange={handelChange}
            className="inp m-1"
            as="select"
            type="text"
            required
          >
            <option value="" disabled selected>
              استان
            </option>
            {Object.keys(data).map((State) => {
              return (
                <option value={Object.values(data[State])} key={State}>
                  {State}
                </option>
              );
            })}
          </Form.Control>
          <Form.Control className="inp m-1" as="select" type="text" required>
            <option disabled selected>
              محل تولد
            </option>
            {city.map((item) => {
              return <option key={item}>{item}</option>;
            })}
          </Form.Control>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Passwordshow />
        </Form.Group>

        <Button
          variant="success"
          type="submit"
          className="lastbtn"
          onClick={handelClick}
        >
          ثبت نام
        </Button>
      </Form>
    </div>
  );
};

export default Register;
