export default function Navbar (){
    return (
        <header class="header flex">
        <a href="#" class="logo">Jhon <span class="text-color">Doe</span></a>
        <div class="navOverlay"></div>
        <nav class="navbar flex">
            <div class="avatar">
                <img src="img/1690805230779.jpg" alt="avatar"/>
                <h2>Jhon <span class="text-color">Doe</span></h2>
            </div>
            <div class="navmenu flex" id="sideNav">
                <a href="#">Home</a>
                <a href="#Aboutme">Aboutme</a>
                <a href="#Skills">Skills</a>
                <a href="#Experience">Experience</a>
                <a href="#Projects">Projects</a>
                <a href="#Contact">Contact</a>
                <div class="social-link flex">
                    <a href=""><i class='bx bxl-instagram'></i></a>
                    <a href=""><i class='bx bxl-linkedin-square'></i></a>
                    <a href=""><i class='bx bxl-facebook-circle'></i></a>
                </div> 
            </div>
            <div class="footerNav">
                <p>@ All Rights Reserved to <strong>Jhon Doe</strong></p>
            </div> 
        </nav>
        <div class="toggleMenu">
            <input type="checkbox" name="" id="toggle-menu"/>
            <div class="hamburger">
                <span class="line line1"></span>
                <span class="line line2"></span>
                <span class="line line3"></span>
            </div>
        </div>


    </header>
    )
}