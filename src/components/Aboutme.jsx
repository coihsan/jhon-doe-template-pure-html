export default function Aboutme (){
    return (
        <section className="aboutme-section section" id="Aboutme">
        <div className="aboutme-container container" data-reveal="toUp">
            <div className="section-title">
                <h3 className="title-section">About <span>Me</span></h3>
            </div>
            <p className="center description">I am a digital marketing enthusiast with a passion for helping businesses grow online. I have over 5 years of experience in the industry, and I am an expert in a variety of digital marketing channels, including search engine optimization (SEO), pay-per-click advertising (PPC), social media marketing, and content marketing. I am also a certified Google Ads Expert.</p>
            <button type="button" className="open-modal transition" data-open="modal1"><i className='bx bx-expand'></i> View Personal Info</button>
            <span className="signature">Jhon Doe</span>
        </div>
    </section>
    )
}