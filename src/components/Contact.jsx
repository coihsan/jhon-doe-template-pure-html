export default function Contact (){
    return (
        <section className="contact-section section" id="Contact">
        <div className="contact-container container">
            <div className="section-title" data-reveal="toUp">
                <h3 className="title-section">Contact <span>Me</span></h3>
            </div>
            <div className="contact-content">
                <div className="contact-info">
                    <div className="contact-profile" data-reveal="toUp">
                        <img src="img/1690805230779.jpg" alt=""/>
                        <p>Feel free to reach out to me if my qualifications align with your criteria!</p>
                    </div>
                    <div className="contact-info-body">
                        <div className="contact-box flex" data-reveal="toUp">
                            <i className='bx bx-envelope'></i>
                            <div className="contact-desc">
                                <h4>E-Mail</h4>
                                <p>jhondoe@example.com</p>
                            </div>
                        </div>
                        <div className="contact-box flex" data-reveal="toUp">
                            <i className='bx bxl-whatsapp'></i>
                            <div className="contact-desc">
                                <h4>Phone Number</h4>
                                <p>0812-3456-7890</p>
                            </div>
                        </div>
                        <div className="contact-box flex" data-reveal="toUp">
                            <i className='bx bx-map'></i>
                            <div className="contact-desc">
                                <h4>Address</h4>
                                <p>Kota Tangerang, Karawaci</p>
                            </div>
                        </div>
                        <div className="social-link-footer" data-reveal="toUp">
                            <h4>Visite my social profile and get connected</h4>
                            <div class="social-link-link">
                                <a href=""><i className='bx bxl-instagram transition'></i></a>
                                <a href=""><i className='bx bxl-linkedin-square transition'></i></a>
                                <a href=""><i className='bx bxl-facebook-circle transition'></i></a>
                            </div>
                        </div> 
                    </div>
                </div>
                <div className="form-section" data-reveal="toUp">
                    <form action="contact.php" method="post" className="form-container" id="myForm">
                        <h3>Just say hello!</h3>
                        <div className="input-group">
                            <input type="text" name="name" id="dataForm"  placeholder="Jhonny" className="user-input"/>
                            <i className='bx bx-user'></i>
                            <label for="name" className="user-lable">Your Name</label>
                        </div>
                        <br/>
                        <div className="input-group">
                            <input type="email" name="email" placeholder="jhonny@gmail.com"/>
                            <i className='bx bx-envelope' ></i>
                            <label for="email" className="user-lable">E-Mail Address</label>
                        </div>
                        <br/>
                        <div className="input-group">
                             <input type="number" name="phonenumber" placeholder="+62 812 2345 6789"/><i className='bx bxs-phone' ></i>
                             <label for="phonenumber" class="user-lable">Phone Number</label>
                        </div>
                        <br/>
                       <div className="input-group">
                            <textarea name="message" cols="30" rows="10" placeholder="Your Message"></textarea>
                            <label for="message" className="user-lable">Message</label>
                       </div>
                       <input type="submit" value="Send" id="submitButton" className="transition"/>
                       <button type="button">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
    )
}