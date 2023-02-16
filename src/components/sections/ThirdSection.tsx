import React, { useState, useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { ProjectSection } from '../projectSection'

type ThirdSectionProps = {
    className?: any
}

const ThirdSection: React.FC<ThirdSectionProps> = ({ className }) => {
    const mainRef = useRef<any>(null)
    const [currentHash] = useState<string>('#projects')
    const { hash } = useLocation()

    useEffect(() => {
        if (hash === currentHash && mainRef.current) {
            mainRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [hash, currentHash])
    return (
        <div ref={mainRef} className={"container-section " + (className ?? '')}>
            <picture><img alt="stains-3" className="stains-3" src={require('../../assets/mockups/stains2-min.webp')} /></picture>
            <picture><img alt="stains-4" className="stains-4" src={require('../../assets/mockups/stains2-min.webp')} /></picture>
            <picture><img alt="stains-5" className="stains-5" src={require('../../assets/mockups/stains2-min.webp')} /></picture>
            <div className="container-section-left">
                <div className="container-section-left-title">
                    <span>My work</span>
                    <span>Latest projects</span>
                </div>
                <div className="container-section-left-body">
                    <ProjectSection 
                        revert={false}
                        mockup={'mockup-strava'}
                        project={
                            {
                                name: 'Strava',
                                type: 'Mobile app',
                                description: (<p><b>Record an activity</b> to be featured on your Strava channel, where your friends and followers <b>can share</b> their own runs and workouts. You can <b>find/talk</b> to new people around you who have the same interests as you.</p>),
                                link: 'https://www.figma.com/proto/o6J4CrIKYtBjbVrpDdJEdE/Strava?page-id=123%3A1253&node-id=546%3A9484&viewport=592%2C584%2C0.11&scaling=scale-down-width&starting-point-node-id=546%3A9484'
                            }
                        }
                    />
                    <ProjectSection
                        revert={true}
                        mockup={'mockup-mondsa'}
                        project={
                            {
                                name: 'Mondsa',
                                type: 'Web app',
                                description: (<p>Simple product aimed at any sector such as <b>students</b>, <b>entrepreneurs, small companies</b>, who are starting to make projects and want to start managing and organizing themselves in a more <b>orderly</b> and <b>easy</b> way from start to finish. </p>),
                                link: 'https://www.figma.com/proto/IMm1iu4QW9pW3wBh9mFo4M/MONDSA?page-id=293%3A15911&node-id=805%3A26373&viewport=-420%2C-1058%2C0.09&scaling=min-zoom&starting-point-node-id=805%3A26373'
                            }
                        }
                    />
                    <ProjectSection
                        revert={false}
                        mockup={'mockup-nio'}
                        project={
                            {
                                name: 'Nio Growth',
                                type: 'Web app',
                                description: (<p><b>NIOsaas| Growth</b> services to help people <b>reach</b> their <b>dreams and objectives</b> both in <b>personal</b> and <b>professional</b> life.</p>),
                                link: 'https://www.figma.com/proto/SPIhqvEdvH9jzjBUDedngC/NIO?page-id=235%3A24185&node-id=1015%3A20846&viewport=1707%2C-605%2C0.12&scaling=min-zoom&starting-point-node-id=1015%3A20846'
                            }
                        }
                    />
                </div>
            </div>
        </div>
    )
}

export default ThirdSection