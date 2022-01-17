import React from 'react'
import Particles from 'react-particles-js'
import styled from 'styled-components'

import Particlesjsconfig from "../config/Particlesjsconfig";

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
            <Particles id="tsparticles"  params={Particlesjsconfig} />
        </Box>
    )
};

export default Particle;