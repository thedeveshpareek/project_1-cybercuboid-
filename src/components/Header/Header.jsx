import React from 'react'
import styled from 'styled-components'
import { Link, animateScroll as scroll } from "react-scroll";

const Link1 = styled(Link)`
color: #fff;
&:hover {
	color: green;
	transition: 200ms ease-in;
}
`;


const styleDiv = {
    backgroundColor: 'transparent',
    color: '#fff',
    border: 'none',
    padding: '15px',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    postion: 'fixed',
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
    backgroundColor: 'wheat',
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
                    <Link1 >
                        Project
                    </Link1>
                </h1>
            </div>
            <div className="Nav-container" style={styleNav}>
                    <div className="Nav-1">
                        <Link1 activeClass="active" to="#About" spy={true} smooth={true} offset={-70} duration={500}>
                            About
                        </Link1>
                    </div>
                    <div className="Nav-item-2">
                        <Link1 activeClass="active" to="#whitepaper" spy={true} smooth={true} offset={-70} duration={500}>
                            White Paper
                        </Link1>
                    </div>
                    <div className="Nav-item-3">
                        <Link1 activeClass="active" to="#Tokenmics" spy={true} smooth={true} offset={-70} duration={500}>
                            Tokenmics
                        </Link1>
                    </div>
                    <div className="Nav-item-4">
                        <Link1 activeClass="active" to="#Roadmap" spy={true} smooth={true} offset={-70} duration={500}>
                            Roadmap
                        </Link1>
                    </div>
                    <div className="Nav-item-5">
                        <Link1 activeClass="active" to="#Team" spy={true} smooth={true} offset={-70} duration={500}>
                            Sign Up
                        </Link1>
                    </div>
            </div>
            <div className="Sign-in-container">
                <button className="Sign-in-button" style={styleBtn} >
                        <Link1 activeClass="active" to="#Team" spy={true} smooth={true} offset={-70} duration={500}>
                            Sign In
                        </Link1>
                </button>
            </div>
        </div>
    )
}

export default Header
