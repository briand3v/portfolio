import React from 'react'
import MainSection from '../../components/sections/MainSection'
import SecondSection from '../../components/sections/SecondSection'
import ThirdSection from '../../components/sections/ThirdSection'

const Home: React.FC = () => {
    return (
        <div>
            <MainSection />
            <SecondSection className="second-section-container" />
            <ThirdSection className="third-section-container"/>
        </div>
    )
}

export default Home