import React from 'react'
// import Header from '../Header/Header'
import styled from 'styled-components'
import Particle from '../../subcomponents/Particle';

const Box = styled.div`
background-image : url('images/banner.png');
background-size: cover;
width: 100%;
height:100vh;
position: relative;
`


const Hero = () => {
    return (
        <>
            <Box>
                <Particle value={200} value_area={1000} />
            </Box>
            <h1>Hello</h1>
            <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.</p>
        </>
    )
}

export default Hero
