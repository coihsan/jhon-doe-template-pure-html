
import React, { useState } from 'react';
import ReactModal from 'react-modal';

const Aboutme = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };
    return (
        <section className="aboutme-section section" id="Aboutme">
        <div className="aboutme-container container" data-reveal="toUp">
            <div className="section-title">
                <h3 className="title-section">About <span>Me</span></h3>
            </div>
            <p className="center description">I am a digital marketing enthusiast with a passion for helping businesses grow online. I have over 5 years of experience in the industry, and I am an expert in a variety of digital marketing channels, including search engine optimization (SEO), pay-per-click advertising (PPC), social media marketing, and content marketing. I am also a certified Google Ads Expert.</p>
            <button onClick={handleOpen} type="button" className="open-modal transition" data-open="modal1"><i className='bx bx-expand'></i> View Personal Info</button>
        </div>
        <ReactModal className="modal" isOpen={isOpen} onRequestClose={handleClose}>
        <div id="modal1">
        <div className="modal-dialog">
            <div className="modal-contain personal-info-section">
                <img src={'https://coihsan.github.io/iseng/assets/1690805230779.webp'} alt="avatar"/>
                <h1 className="center">Jhon Doe</h1>
                <h3 className="center">Digital Marketing & Web Designer</h3>
                <p className="center">I'm a digital marketer, which means I spend all day online. I'm not sure if that's a good thing or a bad thing, but it's definitely made me a pro at finding cat videos</p>
                <div className="personal-info">

                    <div className="personal-info-detail">
                      <div><i className='bx bxs-graduation' ></i></div>
                      <div className="personal-info-contain">
                        <div className="table-title">Degree</div>
                        <div className="table-isi">Lorem ipsum</div>
                      </div>
                    </div>
                    <div className="personal-info-detail">
                      <div><i className='bx bx-envelope' ></i></div>
                      <div className="personal-info-contain">
                        <div className="table-title">G-Mail</div>
                        <div className="table-isi">jhondoe@example.com</div>
                      </div>
                    </div>
                    <div className="personal-info-detail">
                      <div><i className='bx bxl-whatsapp' ></i></div>
                      <div className="personal-info-contain">
                        <div className="table-title">WhatsApp</div>
                        <div className="table-isi">0812-3456-7890</div>
                      </div>
                    </div>
                    <div className="personal-info-detail">
                      <div><i className='bx bx-calendar' ></i></div>
                      <div className="personal-info-contain">
                        <div className="table-title">Birthday</div>
                        <div className="table-isi">3000 BCE</div>
                      </div>
                    </div>
                    <div className="personal-info-detail">
                      <div><i className='bx bxs-map-pin' ></i></div>
                      <div className="personal-info-contain">
                        <div className="table-title">Location</div>
                        <div className="table-isi">Kota Tangerang</div>
                      </div>
                    </div>
                    <div className="personal-info-detail">
                      <div><i className='bx bx-user-pin' ></i></div>
                      <div className="personal-info-contain">
                        <div className="table-title">Freelance / Work</div>
                        <div className="table-isi">Available</div>
                      </div>
                    </div>
                  </div>
        
                <div className="modal-footer">
                    <button onClick={handleClose} type="button" className="close-modal" data-close>Close</button>
                </div>
            </div>
        </div>
    </div>
      </ReactModal>
    </section>
    )
}

export default Aboutme