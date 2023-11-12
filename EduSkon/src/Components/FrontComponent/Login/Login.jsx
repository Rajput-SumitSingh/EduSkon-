import React from 'react'
import {PiPencilLineBold} from "react-icons/pi"
import { Modal } from 'react-bootstrap'

function Login(props) {
  return (
    <>
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
        <div className="container">


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
                 
                </div>
              </div>
              <div className="card p-1 bg-transparent border-0">
                  <div className="card-body">
                    
                    <div className="sign-up-text text-center styled_text">
                      Already member?{" "}
                      <span
                        
                        className="bg-transparent text-primary"
                        style={{ cursor: "pointer" }}
                      >
                        Sign-in
                      </span>
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
    </>
  )
}

export default Login