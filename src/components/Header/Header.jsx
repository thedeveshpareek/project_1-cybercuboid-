import React from 'react'
import styled from 'styled-components'
import { Link } from "react-scroll";

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
    position:'fixed',
    zIndex:'0',
    width:'100%',
    cursor:'pointer',
   
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
    backgroundColor: 'red',
    color: 'red',
    border: 'none',
    padding: '15px',
    borderRadius: '20px',
    fontSize: '1em',
    fontWeight: 'bold',
    cursor: 'pointer',
}

function Header() {
        
    return (
        <div className="header fixed-top"  style={styleDiv}>
        
            <div className="Logo-container" style={LogoStyle}>
                <h1 className="Logo">
                    <Link1 to="Home" smooth={true} duration={500} >
                        Project
                    </Link1>
                </h1>
            </div>
            <div className="Nav-container" style={styleNav}>
                    <div className="Nav-1">
                        <Link1 to="About" smooth={true} duration={500}>
                            About
                        </Link1>
                    </div>
                    <div className="Nav-item-2">
                        <Link1 to="whitepaper" smooth={true} duration={500}>
                            White Paper
                        </Link1>
                    </div>
                    <div className="Nav-item-3">
                        <Link1 to="Tokenmics" smooth={true} duration={500}>
                            Tokenmics
                        </Link1>
                    </div>
                    <div className="Nav-item-4">
                        <Link1 to="Roadmap" smooth={true} duration={500}>
                            Roadmap
                        </Link1>
                    </div>
                    <div className="Nav-item-5">
                        <Link1 to="#" smooth={true} duration={500}>
                            Sign Up
                        </Link1>
                    </div>
            </div>
            <div className="Sign-in-container">
                <button className="Sign-in-button" style={styleBtn} >
                        <Link1 to="#" smooth={true} duration={500}>
                            Sign In
                        </Link1>
                </button>
            </div>
            
        </div>
    )
}

export default Header
