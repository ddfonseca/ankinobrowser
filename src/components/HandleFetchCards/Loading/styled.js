import styled from 'styled-components'
import { Spinner9 } from '@styled-icons/icomoon/Spinner9'
import { moveInCircle } from '../../../styles/animation'

export const LoadingWrapper = styled.div`
    margin: 1em 0;
    display: flex;
    justify-content: center;
`

export const Spinner = styled(Spinner9)`
    animation: ${moveInCircle} 2s linear infinite;
    height: 40px;
`
