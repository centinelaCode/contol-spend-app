import React from 'react'
import styled from 'styled-components'
import { ReactComponent as Points } from '../images/puntos.svg'

const Svg = styled.svg`
    height: 50vh;
    width: 100%;
    position: fixed;
    bottom: 0;
    z-index: 0;
    path {
        fill: rgba(34, 197, 94, .4);
    }
`;
 
const PointsUp = styled(Points)`
    position: fixed;
    z-index: 1;
    top: 2.5rem; /* 40px */
    left: 2.5rem; /* 40px */
`;
 
const PointsDown = styled(Points)`
    position: fixed;
    z-index: 1;
    bottom: 2.5rem; /* 40px */
    right: 2.5rem; /* 40px */
`;

export const Fondo = () => {
   return (
      <>
         <PointsUp />
         <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path 
               fillOpacity="1" 
               d="M0,224L40,218.7C80,213,160,203,240,208C320,213,400,235,480,245.3C560,256,640,256,720,240C800,224,880,192,960,186.7C1040,181,1120,203,1200,192C1280,181,1360,139,1400,117.3L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
            ></path>
         </Svg>
         <PointsDown />
      </>
   )
}

