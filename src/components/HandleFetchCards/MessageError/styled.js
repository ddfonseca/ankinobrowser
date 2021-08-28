import styled from 'styled-components'
import { Warning } from '@styled-icons/entypo/Warning'

export const MessageErrorWrapper = styled.div`
    display: flex;
    /* justify-content: center; */
    align-items: center;
    flex-direction: column;
    width: 60%;
    margin: 0 auto;
    margin-top: 1em;
    padding-top: 1em;
    font-size: 1.1rem;
    box-shadow: ${({ theme }) =>
        theme.title === 'light' ? '5px 5px 5px 5px #ccc;' : 'none;'};
    border-radius: 10px;
    background-color: #fff;
`

export const WarningIcon = styled(Warning)`
    color: #ff5555;
    width: 9%;
`

export const H1 = styled.h1`
    font-size: 1.3rem;
    font-weight: normal;
    color: rgba(0, 0, 0, 0.8);
    padding: 0.5rem;
`
export const P = styled.p`
    color: ${({ theme }) => theme.colors.grey};
    padding-bottom: 1.6rem;
    padding: 0 1.6rem 1.6rem;
`

export const Dismiss = styled.button`
    border: none;
    border-radius: 0 0 10px 10px;
    cursor: pointer;
    background: #ff5555;
    color: white;
    padding: 0.8rem;
    width: 100%;
`
