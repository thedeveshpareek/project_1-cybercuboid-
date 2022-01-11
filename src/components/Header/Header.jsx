import React from 'react'
// import {NavLink} from 'react-router-dom'

const styleDiv = {
    backgroundColor: 'transparent',
    color: '#fff',
    border: 'none',
    padding: '15px',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
}

const LogoStyle = {
    fontSize: '1em',
    fontWeight: 'bold',
}

const styleNav = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: '0 0',
    gap : '15px',
}

const styleBtn = {
    backgroundColor: 'green',
    color: '#fff',
    border: 'none',
    padding: '15px',
    borderRadius: '20px',
    fontSize: '1em',
    fontWeight: 'bold',
    cursor: 'pointer',
}

function Header() {
    return (
        <div className="header" style={styleDiv}>
            <div className="Logo-container" style={LogoStyle}>
                <h1 className="Logo">
                    {/* <NavLink to="/"> */}
                        Project
                    {/* </NavLink> */}
                </h1>
            </div>
            <div className="Nav-container" style={styleNav}>
                    <div className="Nav-item-1">
                        {/* <NavLink to="/About" className="Nav-link-about"> */}
                            About
                        {/* </NavLink> */}
                    </div>
                    <div className="Nav-item-2">
                        {/* <NavLink to="/White Paper" className="Nav-link-white-paper"> */}
                            White Paper
                        {/* </NavLink> */}
                    </div>
                    <div className="Nav-item-3">
                        {/* <NavLink to="/Tokenmics" className="Nav-link-tokenmics"> */}
                            Tokenmics
                        {/* </NavLink> */}
                    </div>
                    <div className="Nav-item-4">
                        {/* <NavLink to="/Roadmap" className="Nav-link-roadmap"> */}
                            Roadmap
                        {/* </NavLink> */}
                    </div>
                    <div className="Nav-item-5">
                        {/* <NavLink to="/SignUp" className="Nav-link-sign-up"> */}
                            Sign Up
                        {/* </NavLink> */}
                    </div>
            </div>
            <div className="Sign-in-container">
                <button className="Sign-in-button" style={styleBtn}>
                    {/* <NavLink to="/SignIn" className="Sign-in-link"> */}
                        Sign In
                    {/* </NavLink> */}
                </button>
            </div>
        </div>
    )
}

export default Header
