import { Link } from "react-router-dom"

export default function Navbar (){
    return (
        <header className="header flex">
        <a href="#" className="logo">Jhon <span className="text-color">Doe</span></a>
        <div className="navOverlay"></div>
        <nav className="navbar flex">
            <div className="avatar">
                <img src="img/1690805230779.jpg" alt="avatar"/>
                <h2>Jhon <span className="text-color">Doe</span></h2>
            </div>
            <div className="navmenu flex" id="sideNav">
                <a href="#">Home</a>
                <a href="#Aboutme">Aboutme</a>
                <a href="#Skills">Skills</a>
                <a href="#Experience">Experience</a>
                <a href="#Projects">Projects</a>
                <a href="#Contact">Contact</a>
                <Link to={'/Blog'}>Blog</Link>
                <div className="social-link flex">
                    <a href=""><i className='bx bxl-instagram'></i></a>
                    <a href=""><i className='bx bxl-linkedin-square'></i></a>
                    <a href=""><i className='bx bxl-facebook-circle'></i></a>
                </div> 
            </div>
            <div className="footerNav">
                <p>@ All Rights Reserved to <strong>Jhon Doe</strong></p>
            </div> 
        </nav>
        <div className="toggleMenu">
            <input type="checkbox" name="" id="toggle-menu"/>
            <div className="hamburger">
                <span className="line line1"></span>
                <span className="line line2"></span>
                <span className="line line3"></span>
            </div>
        </div>


    </header>
    )
}