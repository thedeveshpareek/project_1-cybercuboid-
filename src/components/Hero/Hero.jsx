import React from 'react'
import Header from '../Header/Header'

const styleDiv = {
    backgroundImage : 'url(images/banner.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    width: '100%',
    backgroundColor : 'transparent',
    color: '#fff',
    border: 'none',
    padding : '15px 0'
}

const StyleText = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: '0 15px',
}

const StyleHead = {
    padding: '0',
} 

const Hero = () => {
    return (
        <div className="hero" style={styleDiv}>
            <Header style={StyleHead}/>
            <div className="hero-text-container" style={StyleText} >
                <div className="hero-text-1">
                    <h1 className="hero-text-1-h1">
                        Virtal Banking Made Easy
                    </h1>
                </div>
                <div className="hero-text-2">
                    <h3 className="hero-text-2-h2-1">
                        SignUp For A New Account Today and Get <strong>$250</strong>
                    </h3>
                    <h3 className="hero-text-2-h2-2">
                        in credit towards your Next Investment
                    </h3>
                </div>
            </div>
        </div>
    )
}

export default Hero
