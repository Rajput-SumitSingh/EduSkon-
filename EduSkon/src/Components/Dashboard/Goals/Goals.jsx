import React from 'react'
import "./goal.css";
import SchoolImg from "../../../Assets/images/open-book.png"
import BankImg from "../../../Assets/images/bank.png";
import CertificateImg from '../../../Assets/images/certificate.png'
import CalculatorImg from '../../../Assets/images/accounting.png'
import MBBSImg from '../../../Assets/images/doctor.png'
import EducationImg from '../../../Assets/images/education.png'
import EngineeringImg from '../../../Assets/images/engineering.png'
import TestImg from '../../../Assets/images/online-test.png'
import CollegeStudentImg from "../../../Assets/images/College-Student.png";
import ReviseImg from "../../../Assets/images/dailyliveclasses_0c0023950f_c187155ee3.svg";
import LiveClassImg from "../../../Assets/images/dailyliveclasses_0c0023950f_c187155ee3.svg";
import LearningImg from "../../../Assets/images/syllabus_a9da21d824_b20b285483.svg";
import StartLearningImg from "../../../Assets/images/highlightgoals_96d24a04e7_a8e8de225d.svg"
import DailyLiveClasses from "../../../Assets/images/highlightminswatched_fe52bc4026_ca82eba8b0.svg";
import MinimumWatchedImg from "../../../Assets/images/highlightlive_b05ed1f073_a8042bd7a8.svg";
import EducatorImg from "../../../Assets/images/hightlighteducators_c894789a76_58c2a07e52.svg";
import FreeCourseImg from "../../../Assets/images/highlightfreecourses_bb697dbd44_47fe832f07.svg"
import {CgSearch} from "react-icons/cg"

function Goals() {
  return (
    <div id="goals" className='p-3 m-2'>
                <div className="container goal_container">
                    <div className="text-start">
                        <h4 className='text-secondary'>popular goals </h4>

                    </div>

                    <div className="row p-2">
                        <div className="col-md-3 col-12">
                            <div className="card h-100">
                                <div className="card-body">
                                    <div className="justify-content-center text-align-center text-center">
                                        <div className="col-md-3 col-12">
                                            
                                        </div>
                                        <img src={SchoolImg} alt="Class-12" style={{ width: "50%" }} />
                                        <div className="card_text">
                                            <h5 className='text-secondary p-1'>UPSS CSE - GS</h5>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-12">
                            <div className="card h-100">
                                <div className="card-body">
                                    <div className="justify-content-center text-align-center text-center">
                                        <img src={EngineeringImg} alt="Class-12" style={{ width: "50%" }} />
                                        <div className="card_text">
                                            <h5 className='text-secondary p-1'>IIT JEE</h5>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-12">
                            <div className="card h-100">
                                <div className="card-body">
                                    <div className="justify-content-center text-align-center text-center">
                                        <img src={MBBSImg} alt="Class-12" style={{ width: "50%" }} />
                                        <div className="card_text">
                                            <h5 className='text-secondary p-1'>NEET UG</h5>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-12">
                            <div className="card h-100">
                                <div className="card-body">
                                    <div className="justify-content-center text-align-center text-center">
                                        <img src={BankImg} alt="Class-12" style={{ width: "50%" }} />
                                        <div className="card_text">
                                            <h5 className='text-secondary p-1'>Bank Exam</h5>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>


                    </div>
                    <div className="row p-2">
                        <div className="col-md-3 col-12">
                            <div className="card h-100">
                                <div className="card-body">
                                    <div className="justify-content-center text-align-center text-center">
                                        <img src={SchoolImg} alt="Class-12" style={{ width: "50%" }} />
                                        <div className="card_text">
                                            <h5 className='text-secondary p-1'>SSC JE & state AE exams</h5>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-12">
                            <div className="card h-100">
                                <div className="card-body">
                                    <div className="justify-content-center text-align-center text-center">
                                        <img src={CertificateImg} alt="Class-12" style={{ width: "50%" }} />
                                        <div className="card_text">
                                            <h5 className='text-secondary p-1'>CAT & other MBA entrance tests</h5>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-12">
                            <div className="card h-100">
                                <div className="card-body">
                                    <div className="justify-content-center text-align-center text-center">
                                        <img src={SchoolImg} alt="Class-12" style={{ width: "50%" }} />
                                        <div className="card_text">
                                            <h5 className='text-secondary p-1'>CBSE class 12</h5>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-12">
                            <div className="card h-100">
                                <div className="card-body">
                                    <div className="justify-content-center text-align-center text-center">
                                        <img src={CalculatorImg} alt="Class-12" style={{ width: "50%" }} />
                                        <div className="card_text">
                                            <h5 className='text-secondary p-1'>CA Intermediate</h5>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>


                    </div>
                    <div className="goal_btn">
                        <button type='button' className='btn btn-outline-dark m-2' style={{ width: "300px" }} >see all goals <CgSearch /></button>
                    </div>

                </div>
            </div>
  )
}

export default Goals