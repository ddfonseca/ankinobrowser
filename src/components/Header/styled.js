import styled from 'styled-components'
import { moveInLeft } from '../../styles/animation'

export const Container = styled.div`
    background: ${({ theme }) => theme.colors.primary};
    color: #fff;
    /* animation: ${moveInLeft} 1.3s ease-out; */
`

export const ContainerFixedWidth = styled.div`
    padding: 15px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 40rem;
    margin: 0 auto;
`

export const Title = styled.h1`
    font-family: 'Raleway', sans-serif;
    letter-spacing: 1px;
    margin: 0;
    /* animation: ${moveInLeft} 1.3s ease-out; */
    animation: ${moveInLeft} 1.3s ease-out;
    text-transform: uppercase;
`
