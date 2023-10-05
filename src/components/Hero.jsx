export default function Hero (){
    return (
        <section class="hero-section">
        <div class="hero-container">
            <img class="avatar-hero" src="img/1690805230779.jpg" alt="avatar"/>
            <div class="hero-body-text">
                <div class="text-float-hero">Hi, <span id="greeting"></span></div>
                <h3 class="nameUser">I'm<span class="text-color"> Jhon Doe!</span></h3>
                <h4 class="jobTitle">Digital Marketing <span class="text-color">& Web Designer</span></h4>
                <div class="download-area flex">
                    <a target="_blank" href="#" class="contactme flex transition"><i class='bx bxl-whatsapp'></i> WhatsApp</a>
                    <a target="_blank" href="#" class="myCV flex transition"><i class='bx bx-download'></i> Resume</a>
                </div>
            </div>
            
        </div>

    </section>
    )
}