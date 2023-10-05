export default function Hero (){
    return (
        <section className="hero-section">
        <div className="hero-container">
            <img className="avatar-hero" src="img/1690805230779.jpg" alt="avatar"/>
            <div className="hero-body-text">
                <div className="text-float-hero">Hi, <span id="greeting"></span></div>
                <h3 className="nameUser">I'm<span className="text-color"> Jhon Doe!</span></h3>
                <h4 className="jobTitle">Digital Marketing <span class="text-color">& Web Designer</span></h4>
                <div class="download-area flex">
                    <a target="_blank" href="#" className="contactme flex transition"><i className='bx bxl-whatsapp'></i> WhatsApp</a>
                    <a target="_blank" href="#" className="myCV flex transition"><i className='bx bx-download'></i> Resume</a>
                </div>
            </div>
            
        </div>

    </section>
    )
}