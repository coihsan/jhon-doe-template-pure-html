import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function MenuToggle() {
  const [checked, setChecked] = useState(false);
  const slide = 'slide';
  const active = 'active';

  useEffect(() => {
    const checkbox = document.getElementById('toggle-menu');
    const sidenav = document.querySelector('.navbar');
    const overlay = document.querySelector('.navOverlay');

    checkbox.addEventListener('change', () => {
      setChecked(checkbox.checked);
      if (checkbox.checked) {
        sidenav.classList.add(slide);
        overlay.classList.add(active);
      } else {
        sidenav.classList.remove(slide);
        overlay.classList.remove(active);
      }
    });

    document.addEventListener('click', (event) => {
      if (!event.target.closest('#toggle-menu')) {
        setChecked(false);
        checkbox.checked = false;
        sidenav.classList.remove(slide);
        overlay.classList.remove(active);
      }
    });
  }, []);

  return (
    <div className="toggleMenu">
      <input type="checkbox" name="" id="toggle-menu" />
      <div className="hamburger">
        <span className="line line1"></span>
        <span className="line line2"></span>
        <span className="line line3"></span>
      </div>
    </div>
  );
}

export default function Navbar() {
  return (
    <header className=''="header flex">
        <Link to={'/'} className="logo">Jhon <span className="text-color">Doe</span></Link>
        <div className="navOverlay"></div>
        <nav className="navbar flex">
            <div className="avatar">
                <img src="img/1690805230779.jpg" alt="avatar"/>
                <h2>Jhon <span className="text-color">Doe</span></h2>
            </div>
            <div className="navmenu flex" id="sideNav">
                <a href="#Projects">Projects</a>
                <a href="#Contact">Contact</a>
                <div className="social-link flex">
                    <a href=""><i className='bx bxl-instagram'></i></a>
                    <a href=""><i class='bx bxl-linkedin-square'></i></a>
                    <a href=""><i className='bx bxl-facebook-circle'></i></a>
                </div> 
            </div>
            <div className="footerNav">
                <p>@ All Rights Reserved to <strong>Jhon Doe</strong></p>
            </div> 
        </nav>
    </header>
  );
}
