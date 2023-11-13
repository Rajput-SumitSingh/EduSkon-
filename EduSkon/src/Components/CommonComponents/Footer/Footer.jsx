import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { BiLogoFacebook } from "react-icons/bi";
import { FiLinkedin, FiPhoneCall } from "react-icons/fi"
import { AiOutlineGithub } from "react-icons/ai";
import { BiLogoGmail } from 'react-icons/bi'
import { PiPencilLineBold } from "react-icons/pi"

function Footer() {

    return (
        <div id="contact" className=' p-5'>
            <div className="container">
                <div className="row p-5">
                    <div className="col-md-6 col-12">
                        <div className="col-md-8">
                            <h3 className='text-primary'>Edu<span className='text-secondary'>Skon<PiPencilLineBold className='m-2' /></span></h3>
                            <p className='text-secondary'>EduSkon is democratising education, making it accessible to all. Join the revolution, learn on India's largest learning platform.
                            </p>
                            <hr style={{ width: "10%" }} />
                            <h5 className='text-dark'>Reach out to us</h5>
                            <span className='text-secondary'> Get your questions answered about starting your journey with EduSkon.</span>
                            <h6 className='text-secondary m-2'><FiPhoneCall /> <b>Call : +91 ********** </b></h6>
                        </div>
                    </div>
                    <div className="col-md-6 col-12">
                        <div className="row">
                            <div className="col-md-4 col-12">
                                <h5><b className='text-secondary'>Company</b></h5>
                                <p ><a href='#' className='text-decoration-none text-secondary'> About us</a></p>
                                <p><a href="#" className='text-decoration-none text-secondary'>Careers</a></p>
                                <p><a href="#" className='text-decoration-none text-secondary'>Blogs</a></p>
                                <p><a href="#" className='text-decoration-none text-secondary'>Privacy policy</a></p>
                                <p><a href="#" className='text-decoration-none text-secondary'>Terms & Conditions</a> </p>
                            </div>
                            <div className="col-md-4 col-12">
                                <h5><b className='text-secondary'>Help & Support</b></h5>
                                <p ><a href='#' className='text-decoration-none text-secondary'>User Guidelines </a></p>
                                <p><a href="#" className='text-decoration-none text-secondary'>Site Map</a></p>
                                <p><a href="#" className='text-decoration-none text-secondary'>Refund Policy</a></p>
                                <p><a href="#" className='text-decoration-none text-secondary'>Takedown Policy</a></p>
                                <p><a href="#" className='text-decoration-none text-secondary'>Grievance Redressal</a></p>

                            </div>
                            <div className="col-md-4 col-12">
                                <h5><b className='text-secondary'>Popular goals</b></h5>
                                <p><a href="#" className='text-decoration-none text-secondary'>IIT JEE</a></p>
                                <p><a href="#" className='text-decoration-none text-secondary'>UPSC</a></p>
                                <p><a href="#" className='text-decoration-none text-secondary'>SSC</a></p>
                                <p><a href="#" className='text-decoration-none text-secondary'>CSIR UGC NET</a></p>
                                <p><a href="#" className='text-decoration-none text-secondary'>NEET UG</a></p>

                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-md-6 col-12">
                        <div className="text-start">
                            <span className='text-secondary'>© 2023 EduSkon (Education hub) pvt ltd </span>
                        </div>
                    </div>
                    <div className="col-md-6 col-12">
                        <div className="text-end">
                            <span className='text-secondary g-1'>

                                <a href="#" className='text-decoration-none text-secondary m-1'><FaInstagram /></a>
                                <a href="#" className='text-decoration-none text-secondary m-1'><BiLogoFacebook /></a>
                                <a href="#" className='text-decoration-none text-secondary m-1'><FiLinkedin /></a>
                                <a href="#" className='text-decoration-none text-secondary m-1'><AiOutlineGithub /></a>
                                <a href="#" className='text-decoration-none text-secondary m-1'><BiLogoGmail /></a>

                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer