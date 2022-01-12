import React from 'react'
import styled from 'styled-components'

const Link = styled.a`
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
                    <Link href="#Hero">
                        Project
                    </Link>
                </h1>
            </div>
            <div className="Nav-container" style={styleNav}>
                    <div className="Nav-item-1">
                        <Link href="#About">
                            About
                        </Link>
                    </div>
                    <div className="Nav-item-2">
                        <Link href="#whitepaper">
                            White Paper
                        </Link>
                    </div>
                    <div className="Nav-item-3">
                        <Link href="#ourtransaction">
                            Tokenmics
                        </Link>
                    </div>
                    <div className="Nav-item-4">
                        <Link href="#ourteam">
                            Roadmap
                        </Link>
                    </div>
                    <div className="Nav-item-5">
                        <Link href="#signup">
                            Sign Up
                        </Link>
                    </div>
            </div>
            <div className="Sign-in-container">
                <button className="Sign-in-button" style={styleBtn} >
                        <Link href="#signin">
                            Sign In
                        </Link>
                </button>
            </div>
        </div>
    )
}

export default Header
