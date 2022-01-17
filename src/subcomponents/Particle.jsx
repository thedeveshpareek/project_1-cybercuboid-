import React from 'react'
import Particles from 'react-tsparticles'
// import styled from 'styled-components'
import './Particle.css'

import Particlesjsconfig from "../config/Particlesjsconfig";

const Particle = () => {
    return (
        <Particles id="tsparticles"  params={Particlesjsconfig} />
    )
};

export default Particle;