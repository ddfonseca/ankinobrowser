import styled from 'styled-components'

import { moveInRight } from '../../styles/animation'
import { Search } from '@styled-icons/fluentui-system-regular/Search'

export const SearchWrapper = styled.div`
    position: relative;
    margin-top: 1rem;
    width: 100%;
    animation: ${moveInRight} 1.3s ease-out;
`

export const Form = styled.form`
    display: flex;
    align-items: center;
`

export const Button = styled.button`
    border: none;
    color: none;
`

export const SearchIcon = styled(Search)`
    position: absolute;
    height: 70%;
    right: 2%;
`

export const Input = styled.input`
    background: ${({ theme }) => theme.colors.backgroundInput};
    color: ${({ theme }) => theme.colors.text};
    height: 50px;
    flex-grow: 1;
    /* border-radius: 100px; */
    border-radius: 10px;
    box-shadow: none;
    border: none;
    padding: 0 1rem;
    &:focus {
        outline: none;
    }
`
