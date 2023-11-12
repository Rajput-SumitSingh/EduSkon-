import React from 'react'
import "./navbar.css";
import { PiPencilLineBold } from "react-icons/pi"
import SignUp from '../../FrontComponent/SignUp/SignUp';
import Login from '../../FrontComponent/Login/Login';



function Navbar() {
    const [signupModelShow, setSignupModelShow] = React.useState(false);
    const [loginModelShow, setLoginModelShow] = React.useState(false);

    return (
        <div id="nav_section" >
            <div className="container">
                <nav className="navbar bg-body-tertiary transparent">
                    <div className="container-fluid">
                        <a href='#' className="navbar-brand bold text-primary fs-3 nav_text">Edu<span className='text-secondary' >Skon <PiPencilLineBold /></span></a>

                        <div className="nav-items">
                             <a className='text-secondary m-2' href="#class" style={{textDecoration: "none"}}>start journey</a>
                            <a className='text-secondary m-2' href="#goals" style={{textDecoration: "none"}}>popular goals</a>
                            <a  className='text-secondary m-2' href="#contact" style={{textDecoration: "none"}}>contact us</a>
                        </div>


                        {/* <div className="nav-btn">
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
                        </div> */}
                    </div>
                </nav>
            </div>

            <hr className='mt-0 pt-0 text-dark' />
        </div>
    )
}

export default Navbar