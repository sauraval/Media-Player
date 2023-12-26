import React from "react";
import { Link } from "react-router-dom";

function Footer(){
    return(
        <div style={{height:'300px'}} className="w-100 container">
            <div className="footer-content d-flex justify-content-between">
                <div className="title " style={{width:'400px'}}>
                    <h3 className="d-flex">
                        <i className="fa-solid fa-cloud-arrow-up me-2" style={{height:"45px"}} ></i>
                        Media Player
                    </h3>
                    <span style={{textAlign:'justify'}}>Designed and build with all the love in the world by the Bootstrap team with the help of our contributors</span><br />
                    <span>Code Licensed MIT, docs CC By 3.0</span> <br />
                    <span>Currently v5.3.2</span>
                </div>
                <div className="links d-flex flex-column">
                    <h3>Links</h3>
                    <Link to='/' style={{color:'white'}} className="text-decoration-none">Landing Page</Link>
                    <Link to='/home' style={{color:'white'}} className="text-decoration-none">Home</Link>
                    <Link to='/history' style={{color:'white'}} className="text-decoration-none">Watch History</Link>

                </div>
                <div className="guides d-flex flex-column">
                    <h3>Guides</h3>
                    <a href="https://react.dev/" target='_blank' style={{color:'white'}} className="text-decoration-none">React</a>
                    <a href="https://react-bootstrap.github.io/" target="_blank" style={{color:'white'}} className="text-decoration-none">React Bootstrap</a>
                    <a href="https://www.w3schools.com/react/react_router.asp" target="_blank" style={{color:'white'}} className="text-decoration-none">React Routing</a>
                </div>
                <div className="contact">
                    <h3>Contact Us</h3>
                    <div className="d-flex">
                        <input type="text" placeholder="Enter your mail" className="form-control" />
                        <button className="btn btn-info ms-2"><i class="fa-solid fa-arrow-right"></i></button>
                    </div>
                    <div style={{color:'white'}} className="icons mt-3 d-flex justify-content-between">
                        <i style={{height:'50px'}} class="fa-solid fa-envelope fa-2x"></i>
                        <i style={{height:'50px'}} class="fa-brands fa-twitter fa-2x"></i>
                        <i style={{height:'50px'}} class="fa-brands fa-github fa-2x"></i>
                        <i style={{height:'50px'}} class="fa-brands fa-facebook fa-2x"></i>
                        <i style={{height:'50px'}} class="fa-brands fa-instagram fa-2x"></i>
                        <i style={{height:'50px'}} class="fa-brands fa-linkedin fa-2x"></i>
                    </div>
                </div>
            </div>
            <p className="text-center mt-4">Copy &copy; 2023 Media Player. Built with React.</p>
        </div>
    )
}
export default Footer