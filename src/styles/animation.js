import { keyframes } from 'styled-components'

export const moveInLeft = keyframes`
 0% {
        opacity: 0;
        transform: translateX(-100px);
    }

    80% {
        /* opacity: 0.8; */
        transform: translateX(15px);
    }

    100% {
        opacity: 1;
    }
`
export const moveInRight = keyframes`0% {
        opacity: 0;
        transform: translateX(100px);
    }

    80% {
        /* opacity: 0.8; */
        transform: translateX(-15px);
    }

    100% {
        opacity: 1;
    }
`
