export default function Contact (){
    return (
        <section class="contact-section section" id="Contact">
        <div class="contact-container container">
            <div class="section-title" data-reveal="toUp">
                <h3 class="title-section">Contact <span>Me</span></h3>
            </div>
            <div class="contact-content">
                <div class="contact-info">
                    <div class="contact-profile" data-reveal="toUp">
                        <img src="img/1690805230779.jpg" alt=""/>
                        <p>Feel free to reach out to me if my qualifications align with your criteria!</p>
                    </div>
                    <div class="contact-info-body">
                        <div class="contact-box flex" data-reveal="toUp">
                            <i class='bx bx-envelope'></i>
                            <div class="contact-desc">
                                <h4>E-Mail</h4>
                                <p>jhondoe@example.com</p>
                            </div>
                        </div>
                        <div class="contact-box flex" data-reveal="toUp">
                            <i class='bx bxl-whatsapp'></i>
                            <div class="contact-desc">
                                <h4>Phone Number</h4>
                                <p>0812-3456-7890</p>
                            </div>
                        </div>
                        <div class="contact-box flex" data-reveal="toUp">
                            <i class='bx bx-map'></i>
                            <div class="contact-desc">
                                <h4>Address</h4>
                                <p>Kota Tangerang, Karawaci</p>
                            </div>
                        </div>
                        <div class="social-link-footer" data-reveal="toUp">
                            <h4>Visite my social profile and get connected</h4>
                            <div class="social-link-link">
                                <a href=""><i class='bx bxl-instagram transition'></i></a>
                                <a href=""><i class='bx bxl-linkedin-square transition'></i></a>
                                <a href=""><i class='bx bxl-facebook-circle transition'></i></a>
                            </div>
                        </div> 
                    </div>
                </div>
                <div class="form-section" data-reveal="toUp">
                    <form action="contact.php" method="post" class="form-container" id="myForm">
                        <h3>Just say hello!</h3>
                        <div class="input-group">
                            <input type="text" name="name" id="dataForm"  placeholder="Jhonny" class="user-input"/>
                            <i class='bx bx-user'></i>
                            <label for="" class="user-lable">Your Name</label>
                        </div>
                        <br/>
                        <div class="input-group">
                            <input type="email" name="email" placeholder="jhonny@gmail.com"/>
                            <i class='bx bx-envelope' ></i>
                            <label for="" class="user-lable">E-Mail Address</label>
                        </div>
                        <br/>
                        <div class="input-group">
                             <input type="number" name="phonenumber" placeholder="+62 812 2345 6789"/><i class='bx bxs-phone' ></i>
                             <label for="" class="user-lable">Phone Number</label>
                        </div>
                        <br/>
                       <div class="input-group">
                            <textarea name="message" cols="30" rows="10" placeholder="Your Message"></textarea>
                            <label for="" class="user-lable">Message</label>
                       </div>
                       <input type="submit" value="Send" id="submitButton" class="transition"/>
                       <button type="button">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
    )
}