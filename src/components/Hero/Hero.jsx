import React from 'react'
import Header from '../Header/Header'
// import Particle from '../../subcomponents/Particle'

const styleDiv = {
    backgroundColor: 'transparent',
    backgroundImage : 'url(images/banner.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    width: '100%',
    color: '#fff',
    border: 'none',
    padding : '15px 0',
}

const StyleText = {
    display: 'flex',
    flex : 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: '100px',
    paddingTop:'100px',
}

const StyleHead = {
    padding: '0',
} 

const Hero = () => {
    return (
        <div className="hero" style={styleDiv} id='Home'>
            <Header style={StyleHead}/>
            {/* <Particle /> */}
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
