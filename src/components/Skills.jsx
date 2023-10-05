export default function Skills (){
    return (
        <section className="skills-section section" id="Skills">
        <div className="skills-container container">
            <div className="section-title" data-reveal="toUp">
                <h3 className="title-section reveal">My <span>Skills</span></h3>
                <p className="center reveal">All the skills that I have in that field of work are mentioned.</p>
            </div>
            <div className="services-container">
                <div className="services-card" data-reveal="toUp">
                    <i className='bx bxs-megaphone'></i>
                    <h2>Digital Marketing</h2>
                    <p>I excel in strategizing and executing online campaigns to enhance brand visibility, engage target audiences, and drive conversion rates.</p>
                </div>
                <div className="services-card" data-reveal="toUp">
                    <i className='bx bx-code-alt'></i>
                    <h2>Web Design</h2>
                    <p>I specialize in both on-page and off-page SEO techniques, ensuring your website ranks higher in search engine results. </p>
                </div>
                <div className="services-card" data-reveal="toUp">
                    <i className='bx bx-search-alt'></i>
                    <h2>On & Off Page SEO</h2>
                    <p>As a skilled web designer, I bring creativity and functionality together to craft visually appealing and user-friendly websites.</p>
                </div>
            </div>
            <div className="progressbar-section reveal">
                <div className="progressbar-item">
                    <span>Pay-per-Click (PPC)</span>
                    <div className="progressbar-fill" data-reveal="slide">
                        <div className="progressbar-background" style={{ width: "80%" }}></div>
                        <span>80%</span>
                    </div>
                </div>
                <div className="progressbar-item">
                    <span>Meta Ads (Facebook & Instagram)</span>
                    <div className="progressbar-fill" data-reveal="slide">
                        <div className="progressbar-background" style={{ width: "70%" }}></div>
                        <span>70%</span>
                    </div>
                </div>
                <div className="progressbar-item">
                    <span>Link Building</span>
                    <div className="progressbar-fill" data-reveal="slide">
                        <div className="progressbar-background" style={{ width: "75%" }}></div>
                        <span>75%</span>
                    </div>
                </div>
                <div className="progressbar-item">
                    <span>Local SEO</span>
                    <div className="progressbar-fill" data-reveal="slide">
                        <div className="progressbar-background" style={{ width: "55%" }}></div>
                        <span>55%</span>
                    </div>
                </div>
                <div className="progressbar-item">
                    <span>Content Social Media Marketing</span>
                    <div className="progressbar-fill" data-reveal="slide">
                        <div className="progressbar-background" style={{ width: "85%" }}></div>
                        <span>85%</span>
                    </div>
                </div>
                <div className="progressbar-item">
                    <span>Landing Page Creation</span>
                    <div className="progressbar-fill" data-reveal="slide">
                        <div className="progressbar-background" style={{ width: "80%" }}></div>
                        <span>80%</span>
                    </div>
                </div>
                <div className="progressbar-item">
                    <span>Pixel & GTM</span>
                    <div className="progressbar-fill" data-reveal="slide">
                        <div className="progressbar-background" style={{ width: "90%" }}></div>
                        <span>90%</span>
                    </div>
                </div>
                <div className="progressbar-item">
                    <span>Google Analytics</span>
                    <div className="progressbar-fill" data-reveal="slide">
                        <div className="progressbar-background" style={{ width: "70%" }}></div>
                        <span>70%</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}