export default function Hero (){
      const times = new Date().getHours();
        var greeting;
        
        if (times > 3 && times <= 10){
            greeting = "Good Morning!"
        }
        else if (times >= 11 && times <= 14){
            greeting = "Goog Day!";
        }
        else if (times > 14 && times < 17){
            greeting = "Good Afternoon!";
        } else{
            greeting = "Good Evening!";
        }
    return (
        <section className="hero-section">
        <div className="hero-container">
            <img className="avatar-hero" src="https://coihsan.github.io/iseng/assets/1690805230779.webp" alt="avatar"/>
            <div className="hero-body-text">
                <div className="text-float-hero">Hi, <span id="greeting">{greeting}</span></div>
                <h3 className="nameUser">I'm<span className="text-color"> Jhon Doe!</span></h3>
                <h4 className="jobTitle">Digital Marketing <span className="text-color">& Web Designer</span></h4>
                <div className="download-area flex">
                    <a target="_blank" href="#" className="contactme flex transition"><i className='bx bxl-whatsapp'></i> WhatsApp</a>
                    <a target="_blank" href="#" className="myCV flex transition"><i className='bx bx-download'></i> Resume</a>
                </div>
            </div>
            
        </div>

    </section>
    )
}