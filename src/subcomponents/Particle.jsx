import React from 'react'
import Particles from 'react-particles-js'
import styled from 'styled-components'


const Box = styled.div`
background-image : url('images/banner.png');
width: 100vw;
height:100vh;
position: relative;
display: flex;
justify-content: space-evenly;
align-items: center;
`

const Particle = (props) => {
    return (
        <Box>
            <Particles params={{
                particles: {
                    number: {
                        value : props.value,
                        density: {
                            enable: true,
                            value_area: props.value_area
                        }
                    },
                },
            }}
            />
        </Box>
    )
}

export default Particle
