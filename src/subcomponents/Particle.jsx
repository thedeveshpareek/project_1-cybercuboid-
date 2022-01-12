import React from 'react'
import Particles from 'react-particles-js'
import styled from 'styled-components'

import configLight from "../config/particlesjs-config.json";

const Box = styled.div`
position: absolute;
top:0;
right:0;
left:0;
bottom:0;
z-index:0;
`
const Particle = () => {
    return (
        <Box>
            <Particles params={configLight} />
        </Box>
    )
}

export default Particle