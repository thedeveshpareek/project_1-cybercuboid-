import React from 'react'
import Particles from 'react-particles-js'
import styled from 'styled-components'

import configLight from "../config/particlesjs-config-light.json";

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
            <Particles params={configLight}  style = {{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}} />
        </Box>
    )
}

export default Particle