import React from "react"
import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <div className={'super-navs container-section-layer'} style={{ width: '100%', display: 'flex', top: 0, zIndex: 300 }}>
            <div className="content-nav">
                <nav>
                    <ul className="super-navbar">
                        <li style={{ display: 'flex', alignItems: 'center' }}>
                            <div className="logo-taty">
                                <img alt="profile-logo" src={require('../../assets/icons/smudge.png')} height={20} />
                            </div>
                            <Link to="/home">Tatiana</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="content-nav">
                <nav style={{ width: '100%' }}>
                    <ul className="super-navbar-second">
                        <li>
                            <Link to="/home#about-me">About me</Link>
                        </li>
                        <li>
                            <Link to="/home#projects">Projects</Link>
                        </li>
                        {/* <li>
                            <Link to="/home">Contact</Link>
                        </li> */}
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default NavBar