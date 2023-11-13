import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { PiPencilLineBold } from "react-icons/pi"
import { BiSolidUser } from "react-icons/bi";
import { RiLockPasswordLine } from "react-icons/ri";
import { BiHappyHeartEyes, BiLogoGmail } from "react-icons/bi";
import { ImShocked } from "react-icons/im";
import { BsArrowRightCircle } from "react-icons/bs";
import { PiTreeEvergreen } from "react-icons/pi";
import { Form, Field } from "react-final-form";
import { useNavigate } from "react-router-dom";
import Login from '../Login/Login';

function SignUp(props) {
  const [loginShow, setLoginShow] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });
  const onSubmit = async (user) => {

    console.log("valuessss", user);

    localStorage.setItem("signUpData", JSON.stringify(user));

  };


  return (
    <Modal
      {...props}
      size="xl"

      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id=" text-center">
          <h3 className=' text-secondary'>Sign Up with <span className='text-primary'>Edu<span className='text-secondary'>Skon <PiPencilLineBold /></span></span></h3>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className='bg-light'>
        <div classNameclass="container">


          <div className="row">
            <div className="col-md-7 col-12 " style={{marginTop: "16%"}}>
              <h2 className='text-primary'>Edu<span className='text-secondary'>Skon <PiPencilLineBold /></span></h2>
              <p className='text-secondary'>Start your journey with EduSkon...</p>
              <span className='text-secondary'>
                EduSkon is democratising education, making it accessible to all. Join the revolution, learn on India's largest learning platform.
              </span>
            </div>

            <div className="col-md-5 col-12 ">
              <div className="card border-0 shadow p-3">
                <div className="card-body form_container">
                  <Form
                    onSubmit={onSubmit}
                    render={({ handleSubmit }) => (
                      <form
                        onSubmit={handleSubmit}
                        className="p-2 styled_text form_container"
                      >
                        <div className="mb-3 bg-text form_container">
                          <label
                            htmlFor="exampleInputName"
                            className="form-label styled_text"
                          >
                            <BiSolidUser
                              className="styled_text"
                              style={{ marginBottom: "5px" }}
                            />{" "}
                            User Name
                          </label>
                          <Field
                            name="username"
                            component="input"
                            type="text"
                            value={formData.username}
                            className="form-control"
                            id="exampleInputUserName"
                            aria-describedby="emailHelp"
                            required
                          />
                        </div>
                        <div className="mb-3 bg-text form_container">
                          <label
                            htmlFor="exampleInput"
                            className="form-label styled_text"
                          >
                            <RiLockPasswordLine
                              className=""
                              style={{ marginBottom: "5px" }}
                            />{" "}
                            Password
                          </label>
                          <Field
                            name="password"
                            component="input"
                            type="password"
                            value={formData.password}
                            className="form-control"
                            id="exampleInputPassword"
                            aria-describedby="passwordHelp"
                            required
                          />
                        </div>
                        <div className="mb-3 bg-text form_container">
                          <label
                            htmlFor="exampleInputPassword1"
                            className="form-label "
                          >
                            <BiLogoGmail
                              className=""
                              style={{ marginBottom: "5px" }}
                            />{" "}
                            Email
                          </label>
                          <Field
                            name="email"
                            component="input"
                            type="email"
                            value={formData.email}
                            className="form-control "
                            id="exampleInputEmail"
                            aria-describedby="emailHelp"
                            required
                          />
                          <div
                            id="emailHelp"
                            className="form-text text-primary"
                          >
                            We'll never share your email with anyone else.{" "}
                            <PiTreeEvergreen className="bg-text" />
                          </div>
                        </div>
                        <div className="mb-3 form-check">
                          <Field
                            name="checkbox"
                            component="input"
                            type="checkbox"
                            className="form-check-input bg-text"
                            required
                          />
                          <a
                            href="#"
                            className="form-check-label bg-text"
                            htmlFor="exampleCheck1"
                          >
                            Term & Conditions{" "}
                            <BiHappyHeartEyes
                              className="bg-text"
                              style={{ marginBottom: "5px" }}
                            />
                          </a>
                          <div className="text-end mt-1">
                            <button
                              type="submit"
                              className="btn btn-success btn-block"
                            >
                              Sign-Up Now{" "}
                              <BsArrowRightCircle className="bg-success" />
                            </button>
                          </div>
                        </div>
                      </form>
                    )}
                  />
                </div>
              </div>
              <div className="card p-1 bg-transparent border-0">
                  <div className="card-body">
                    
                    <div className="sign-up-text text-center styled_text">
                      Already member?{" "}
                      <span
                        
                        onClick={() => {
                          setLoginShow(true);
                          
                        }}
                        className="bg-transparent text-primary"
                        style={{ cursor: "pointer" }}
                      >
                        Sign-in
                      </span>
                      

                      <Login show={loginShow} onHide={() => setLoginShow(false)} />
                      

                      {/* {renderModal()} */}
                    </div>
                  </div>
                </div>
            </div>
          </div></div>
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  )
}

export default SignUp