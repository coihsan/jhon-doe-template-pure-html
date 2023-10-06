import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'

export default function Blog (){
    return (
        <>
        <Navbar />
        <div className='section'>
            <div className='container'>
                <ul className='index-article'>
                    <li className='list-item'>
                        <h2 className='aticle-title-in-index'>How to Rank Your Website on Google in 2023</h2>
                        <p className='aticle-desc-in-index'>This article will teach you how to rank your website on Google in 2023 by following the latest SEO best practices.</p>
                        <div className='index-item-footer'>
                            <span id='date-post'>22 Sept 2023</span>
                            <span className='topic-category'>SEO</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <Footer />
        </>
    )
}