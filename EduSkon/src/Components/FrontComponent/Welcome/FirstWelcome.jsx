import React, { useState } from 'react'
import Header_img from "../../../Assets/images/home-illustration.svg"
import "./welcome.css";
import { IoIosSchool } from "react-icons/io";
import { PiHandCoinsLight } from "react-icons/pi";
import { HiOutlineSparkles } from "react-icons/hi";
import { BiCheckDouble } from "react-icons/bi";
import { PiPencilLineBold } from "react-icons/pi"
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
import SignUp from '../SignUp/SignUp';
import Footer from '../../CommonComponents/Footer/Footer';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Login from '../Login/Login';


function FirstWelcome() {
    const [signupModelShow, setSignupModelShow] = React.useState(false);
    const [loginModelShow, setLoginModelShow] = React.useState(false);


    return (
        <>
            <div id="nav_section">
                <div className="container p-1 pb-0">
                    <nav className="navbar bg-body-tertiary transparent">
                        <div className="container-fluid">
                            <a className="navbar-brand bold text-primary fs-3 nav_text">Edu<span className='text-secondary'>Skon <PiPencilLineBold /></span></a>

                            <div className="nav-btn">
                                <button className="btn mr-2  border-0 text-success" type="button">
                                    <i class="bi bi-gift">Gift</i>
                                </button>


                                <button className="btn mr-2 btn-outline-dark" type="button" onClick={() => setLoginModelShow(true)}>
                                    Login
                                </button>
                                <Login show={loginModelShow} onHide={() => setLoginModelShow(false)} />


                                <button className="btn btn-outline-dark bg-secondary text-dark" type="button" onClick={() => setSignupModelShow(true)}>
                                    SignUp
                                </button>
                                <SignUp
                                    show={signupModelShow}
                                    onHide={() => setSignupModelShow(false)}
                                />
                            </div>
                       </div>
                    </nav>
                </div>

                <hr className='mt-0 pt-0 text-dark' />
            </div>
            <div id="header_section">
                <div className="container header_container">
                    <div className="row">

                        <div className="col-md-6 col-12 logIn_section">
                            <h1 className="text-dark heading_text">
                                Let's Start your <br />Institute With us.
                            </h1>
                            <div className='text-secondary'>
                                Over <span className='text-success'>10 crore </span>learners trust us for their preparation
                            </div>

                            <div className="col-md-9 col-12">
                                <form className='form_section' action='#'>
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">
                                            Email address
                                        </label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="exampleFormControlInput1"
                                            placeholder="name@example.com"
                                        />
                                        <div id="passwordHelpBlock" className="form-text">
                                            We’ll send an OTP for verification
                                        </div>

                                    </div>
                                    <button type='submit' className='btn btn-block bg-secondary' style={{ width: "100%", marginTop: "10px" }}> join for free</button>

                                </form>
                            </div>


                        </div>
                        <div className="col-md-6 col-12 images_section p-3">
                            <div className="header_img">
                                <div className="justify-content-center align-items-center text-center">

                                    <img src={Header_img} alt="header_img" style={{ width: "80%", }} />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="goals_section" className='p-3 m-2'>
                <div className="container goal_container">
                    <div className="text-start">
                        <h4 className='text-secondary'>popular goals </h4>

                    </div>

                    <div className="row p-2">
                        <div className="col-md-3 col-12">
                            <div className="card h-100">
                                <div className="card-body">
                                    <div className="justify-content-center text-align-center text-center">
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
                        <button type='button' className='btn btn-outline-dark m-2 ' style={{ width: "300px" }} >see all goals </button>
                    </div>

                </div>
            </div>
            <div id="introduction_section p-5 " className='p-5'>
                <div className="container intro_container">
                    <div className="row">


                        <div className="card border-0 shadow">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-6 col-12">
                                        <div className="justify-content-center align-items-center text-center">
                                            <img src={CollegeStudentImg} alt="student-Img" style={{ width: "80%" }} />
                                        </div>

                                    </div>
                                    <div className="col-md-6 col-12">
                                        <div className="text-start pt-5 mt-5">
                                            <div className="text-success fs-2"><b>Introducing <HiOutlineSparkles /></b></div>
                                        </div>
                                        <h2 className='text-dark mt-3 pt-3'>
                                            EduSkon Centres for IIT JEE and NEET UG
                                        </h2>
                                        <span className="text-secondary">
                                            Admissions open in Kota, Delhi, Chandigarh, Sikar, Indore and 20+ other cities!
                                        </span>
                                        <ul style={{ listStyle: "none", marginTop: "0px" }} >

                                            <li className="text-primary m-0 p-0"><BiCheckDouble style={{ marginRight: "10px" }} />Learn from top educators in your city</li>
                                            <li className="text-primary"><BiCheckDouble style={{ marginRight: "10px" }} />In-person classes & doubt solving</li>
                                            <li className="text-primary"><BiCheckDouble style={{ marginRight: "10px" }} />Bonus access to online learning</li>
                                            <button type='button' className='btn btn-outline-dark m-3'>Find a center</button>
                                        </ul>

                                    </div>
                                </div>

                            </div>
                        </div>


                    </div>
                    <div className="row p-5">

                        <div className="col-md-4 col-12">
                            <div className="card h-100 border-0">
                                <div className="card-body">
                                    <img src={LiveClassImg} alt="live-classes-img" className='w-100' />
                                    <h3 className="text-center text-secondary p-3">
                                        Daily live classes
                                    </h3>
                                    <span className='text-dark'>Chat with educators, ask questions, answer live polls, and get your doubts cleared - all while the class is going on</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-12">
                            <div className="card h-100 border-0">
                                <div className="card-body">
                                    <img src={LearningImg} alt="live-classes-img" className='w-100' />
                                    <h3 className="text-center text-secondary p-3">
                                        <b>Practice and revise</b>
                                    </h3>
                                    <span className='text-dark'>Learning isn't just limited to classes with our practice section, mock tests and lecture notes shared as PDFs for your revision</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-12">
                            <div className="card h-100 border-0">
                                <div className="card-body">
                                    <img src={ReviseImg} alt="live-classes-img" className='w-100' />
                                    <h3 className="text-center text-secondary p-3">
                                        Learn anytime, anywhere
                                    </h3>
                                    <span className='text-dark'>One subscription gets you access to all our live and recorded classes to watch from the comfort of any of your devices</span>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
            <div id="start-learning" className='p-5'>
                <div className="container start-learning-container">
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
                                        <div className="p-2">
                                            <div className="card learning-card border-0">
                                                <img src={DailyLiveClasses} alt="start-learning-img" style={{ width: "100%" }} />
                                                <div className="card-img-overlay">
                                                    <p className='fs-5 text-secondary'>mins. watched</p>
                                                    <h6 className='learning-number text-dark fs-3'>8.2B<span className='text-success'>+</span></h6>

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
                                        <div className="p-2">
                                            <div className="card learning-card border-0">
                                                <img src={FreeCourseImg} alt="start-learning-img" style={{ width: "100%" }} />
                                                <div className="card-img-overlay">
                                                    <p className='fs-5 text-secondary'>Video lessions</p>
                                                    <h6 className='learning-number text-dark fs-3'>1M<span className='text-success'>+</span></h6>

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
            <Footer />


        </>
    )
}

export default FirstWelcome