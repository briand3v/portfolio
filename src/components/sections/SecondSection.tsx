import React, { useState, useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { DropDown } from '../dropdown'

type SecondSectionProps = {
    className?: string
}

const SecondSection: React.FC<SecondSectionProps> = ({ className }) => {
    const mainRef = useRef<any>(null)
    const [state] = useState<any>({
        skills: ['Competitive', 'Team Work', 'Creativity', 'Communication', 'Initiative'],
        interests: ['Improvement', 'Learn', 'Show my creativity', 'Mental Health', 'Video games'],
        passions: ['Music', 'Animations', 'Dance', 'Be creative'],
    })
    const [currentHash] = useState<string>('#about-me')
    const { hash } = useLocation()

    useEffect(() => {
        if (hash === currentHash && mainRef.current) {
            mainRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [hash, currentHash])

    return (
        <div ref={mainRef} className={"container-section " + (className ?? '')}>
            <div className="container-section-title">
                <span>About me</span>
                <span>A bit my Journey</span>
            </div>
            <div className="container-section-rows">
                <div className="container-section-left">
                    <img alt="mockup-main" className="about-me-mockup" src={require('../../assets/mockups/Mockup-fondofoto.png')} width={460} />
                    <img alt="mockup-main" className="me-picture" src={require('../../assets/mockups/iron-hack-me.png')} width={350} />
                    {/* <img className="background-laptop" alt="mockup-main" src={require('../../assets/mockups/mockup-macBook.png')} height={230} /> */}
                </div>
                <div className="container-section-right">
                    <div className="container-section-right-about-me-content">
                        <div className="container-section-right-about-me-title">
                            <span>01</span>
                            <span>student</span>
                        </div>
                        <div className="container-section-right-about-me">
                            <div className="container-section-right-about-me-card">
                                <p>
                                    Since I was in high school I liked <b>ux/ui design</b>, so I decided to study it. When I finished high school, I went straight to <b>IronHack</b> because I knew I would learn a lot as it resembles real work, I learned doing individual projects, team projects, personal projects or for real clients.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="container-section-right-about-me-content">
                        <div className="container-section-right-about-me-title">
                            <span>02</span>
                            <span>iron hacker</span>
                        </div>
                        <div className="container-section-right-about-me">
                            <div className="container-section-right-about-me-card">
                                <p>
                                    After 10 very intense weeks, I am ready to enter the world of work and focus on the <b>UI world</b>, since I think I connected more. So now my path is to <b>keep learning</b> and <b>do my best</b>.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="container-section-right-dropdowns">
                        <DropDown name={"Skills"} icon="icon-skills" data={state.skills} />
                        <DropDown name={"Interests"} icon="icon-interests" data={state.interests}/>
                        <DropDown name={"Passions"} icon="icon-passions" data={state.passions} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SecondSection