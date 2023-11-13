import React from 'react'
import "./class.css";
import StudentImg from "../../../Assets/images/graduated.png"
import TeacherImg from "../../../Assets/images/classroom.png"
import { useNavigate } from 'react-router-dom';
function Class() {
  const navigate = useNavigate();

  const handleClick = () =>{
    navigate("/startOrganization")
  }
  return (
    <div id='class' className='class_section p-5' >
    <div className="container">
      <div className="row" >
        <div className="col-md-6 col-12 h-100">
          <div className="card border-0 p-5 shadow">
              <div className="justify-content-center align-items-center">
                <div className="text-center">
                <img src={TeacherImg} alt="student-img" style={{width: "30%", }}/>
                  
                  <h3 className="text-secondary m-3">
                    Start Institute
                  </h3>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur tempora vel aspernatur quam commodi, rem, deleniti error, voluptas iure ad excepturi assumenda sit. Adipisci minima sapiente aspernatur. Nam aspernatur officiis molestiae at, nulla dolores est, voluptates quidem fuga eveniet labore.</p>
                  <button type='button' onClick={handleClick} className='btn btn-outline-secondary '>Start Your Journey</button>
                </div>
              </div>
          </div>
        </div>
        <div className="col-md-6 col-12">
          <div className="card border-0 p-5 shadow h-100">
              <div className="justify-content-center align-items-center">
                <div className="text-center">
                  
                  <img src={StudentImg} alt="student-img" style={{width: "30%", }}/>
                  
                  
                  <h3 className="text-secondary m-3">
                    Join Classes
                  </h3>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur tempora vel aspernatur quam commodi, rem, deleniti error, voluptas iure ad excepturi assumenda sit. Adipisci minima sapiente aspernatur. Nam aspernatur officiis molestiae at, nulla dolores est, voluptates quidem fuga eveniet labore.</p>
                  <button type='button' className='btn btn-outline-success '>View Near Classes</button>
                
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
    
    </div>
  )
}

export default Class