import React from 'react'
import "./header.css";
import HeaderImg from "../../../Assets/images/College-Student.png"
import CollegeStudentImg from "../../../Assets/images/College-Student.png";
import ReviseImg from "../../../Assets/images/dailyliveclasses_0c0023950f_c187155ee3.svg";
import LiveClassImg from "../../../Assets/images/dailyliveclasses_0c0023950f_c187155ee3.svg";
import LearningImg from "../../../Assets/images/syllabus_a9da21d824_b20b285483.svg";
import StartLearningImg from "../../../Assets/images/highlightgoals_96d24a04e7_a8e8de225d.svg"
import DailyLiveClasses from "../../../Assets/images/highlightminswatched_fe52bc4026_ca82eba8b0.svg";
import MinimumWatchedImg from "../../../Assets/images/highlightlive_b05ed1f073_a8042bd7a8.svg";
import EducatorImg from "../../../Assets/images/hightlighteducators_c894789a76_58c2a07e52.svg";
import FreeCourseImg from "../../../Assets/images/highlightfreecourses_bb697dbd44_47fe832f07.svg"

function Header() {
  return (
    <div id="header_section" className='p-4'>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-12">
            <div className=" p-5 text-align-center text-center justify-content-center">
              <h1 className='text-secondary pt-5'>
                <b>Start your journey <br />with EduSkon</b>
              </h1>
              <span className='pt-3 text-dark'>Get unlimited access to structured courses & doubt clearing sessions</span>
              <button type='button' className='btn btn-outline-success m-3 '> Start Learning  </button>
            </div>

          </div>
          <div className="col-md-6 col-12">
            <div className="row">
              <div className="col-md-6 col-12">
                <div className="col">
                  <div className="p-2">
                    <div className="card learning-card border-0">
                      <img src={StartLearningImg} alt="start-learning-img" style={{ width: "100%" }} />
                      <div className="card-img-overlay">
                        <p className='fs-5 text-secondary'>Exam categories</p>
                        <h6 className='learning-number text-dark fs-3'>60<span className='text-success'>+</span></h6>
                      </div>
                    </div>
                  </div>
                  <div className="p-2">
                    <div className="card learning-card border-0">
                      <img src={MinimumWatchedImg} alt="start-learning-img" style={{ width: "100%" }} />
                      <div className="card-img-overlay">
                        <p className='fs-5 text-secondary'>Daily live classes </p>
                        <h6 className='learning-number text-dark fs-3'>1.5k<span className='text-success'>+</span></h6>

                      </div>
                    </div>
                  </div>

                </div>
              </div>
              <div className="col-md-6 col-12">
                <div className="col justify-content-center align-items-center" style={{ paddingTop: "5.5rem" }}>
                  <div className="p-2">
                    <div className="card learning-card border-0">
                      <img src={EducatorImg} alt="start-learning-img" style={{ width: "100%" }} />
                      <div className="card-img-overlay">
                        <p className='fs-5 text-secondary'>Eduvators </p>
                        <h6 className='learning-number text-dark fs-3'>15k<span className='text-success'>+</span></h6>

                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>


          </div>

        </div>
      </div>
    </div>
  )
}

export default Header