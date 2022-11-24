import React from 'react'

const MainSection: React.FC = () => {
    return (
        <div className="container-section main-section-container">
            <div className="container-section-left">
                <div className="container-section-left-title">
                    <p className="regards">Hi!</p>
                    <p className="ui-designer">
                        I'm <span style={{ color: '#f6a081' }}><b>Tatiana</b></span>,<br></br><b>UX/UI Designer</b>
                    </p>
                    <p className="home-place">
                        Based in Barcelona
                    </p>
                    <hr></hr>
                </div>
                <div className="container-section-left-description">
                    <p>
                        UX /UI designer with a lot of motivation and desire to learn. I got in this world, because I like to learn, teach, show and improve all the ideas, creations that are in my mind.
                    </p>
                </div>
                <picture>
                    <img alt="stains" className="stains-main" src={require('../../assets/mockups/stains-min.webp')} />
                </picture>
                <div className="contact-me-content">
                    <div className="social-media">
                        <a href="https://www.linkedin.com/in/tatianamarcallaconza/" target="_blank">
                            <div><img alt="linkedin" src={require('../../assets/icons/linkedin.png')} height={25} /></div>
                        </a>
                        <a href="https://www.instagram.com/tatianna.xm/" target="_blank">
                            <div><img alt="instagram" src={require('../../assets/icons/instagram.png')} height={25} /></div>
                        </a>
                        <a href="https://medium.com/@tatiana.marcalla.02" target="_blank">
                            <div><img alt="instagram" src={require('../../assets/icons/medium.png')} height={25} /></div>
                        </a>
                    </div>
                    <div className="resume">
                        <span><a href={require('../../assets/docs/Tatiana-Marcalla-CV.pdf')} target='_blank'>Download CV</a></span>
                    </div>
                </div>
                <div className="see-more-button">
                    <a href="#about-me">
                        <span>See more</span>
                    </a>
                </div>
                <picture>
                    <img alt="stains-2" className="stains-2" src={require('../../assets/mockups/stains2-min.webp')} />
                </picture>
            </div>
            <div className="container-section-right">
                <div className="container-section-right-mockup">
                    <picture>
                        <img alt="web-p-1" src={require('../../assets/mockups/background-yellow.webp')} height={480} />
                    </picture>
                    <picture><img alt="web-p-2" className="background-avatar" src={require('../../assets/mockups/avatar.webp')} height={700} /></picture>
                    <picture><img alt="web-p-3" className="background-figma" src={require('../../assets/mockups/icon-figma.webp')} height={100} /></picture>
                    <picture><img alt="web-p-4" className="background-adobe" src={require('../../assets/mockups/icon-adobe.webp')} height={55} /></picture>
                    <picture><img alt="web-p-5" className="background-sketch" src={require('../../assets/mockups/icon-sketch.webp')} height={65} /></picture>
                    <picture><img alt="web-p-6" className="background-vsc" src={require('../../assets/mockups/icon-vsc.webp')} height={50} /></picture>
                    <span className="me-quote">
                        "I love to show my<br></br>creativity to others."
                    </span>
                </div>
            </div>
        </div>
    )
}

export default MainSection