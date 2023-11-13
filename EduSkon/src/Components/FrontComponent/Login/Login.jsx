import React from 'react'
import { PiPencilLineBold } from "react-icons/pi"
import {BiSolidUser} from "react-icons/bi";
import {RiLockPasswordLine} from "react-icons/ri"
import {BsArrowRightCircle} from "react-icons/bs"
import {BiHappyHeartEyes} from "react-icons/bi"
import { Modal } from 'react-bootstrap'
import { Form, Field } from 'react-final-form'
import { useNavigate } from 'react-router-dom';

function Login(props) {
  const navigate = useNavigate();

  const onSubmit = (values) => {
    console.log("loginFormValues", values);
    navigate("/dashboard");
  }
  return (
    <Modal
      {...props}
      size="xl"

      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id=" text-center">
          <h3 className=' text-secondary'>Sign In with <span className='text-primary'>Edu<span className='text-secondary'>Skon <PiPencilLineBold /></span></span></h3>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className='bg-light'>
        <div className="container">
          <div className="row">
            <div className="col-md-7 col-12 " style={{ marginTop: "10%" }}>
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
                        className='p-2 '>

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
                            //value={formData.username}
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
                            //value={formData.password}
                            className="form-control"
                            id="exampleInputPassword"
                            aria-describedby="passwordHelp"
                            required
                          />
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
                          </div>
                        <div className="text-end mt-1">
                            <button
                              type="submit"
                              className="btn btn-success btn-block"
                            >
                              Sign-Up Now{" "}
                              <BsArrowRightCircle className="bg-success" />
                            </button>
                          </div>
                      </form>
                    )}
                  />
                </div>
              </div>
              <div className="card p-1 bg-transparent border-0">
                  <div className="card-body">
                    
                    <div className="sign-up-text text-center styled_text">
                      New to EduSkon ? {" "}
                      <span
                        
                        
                        className="bg-transparent text-primary"
                        style={{ cursor: "pointer" }}
                      >
                        Sign-up
                      </span>
                      {/* {renderModal()} */}
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>

  )
}

export default Login