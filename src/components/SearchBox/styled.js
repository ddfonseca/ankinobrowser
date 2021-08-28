import styled from 'styled-components'

import { moveInRight } from '../../styles/animation'
import { Search } from '@styled-icons/fluentui-system-regular/Search'
import { Clear } from '@styled-icons/material-sharp/Clear'

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
    height: 65%;
    right: 2%;

    &:hover {
        cursor: pointer;
        color: ${({ theme }) => theme.colors.hover};
    }
    color: ${({ theme }) => (theme.title === 'light' ? '#3a3a3a' : 'none')};
`
export const ClearIcon = styled(Clear)`
    position: absolute;
    height: 65%;
    right: 8%;
    &:hover {
        cursor: pointer;
        color: ${({ theme }) => theme.colors.hover};
    }
    color: ${({ theme }) => (theme.title === 'light' ? '#3a3a3a' : 'none')};
`

export const Input = styled.input`
    background: ${({ theme }) => theme.colors.backgroundInput};
    color: ${({ theme }) => theme.colors.text};
    height: 50px;
    flex-grow: 1;
    border-radius: 10px;
    box-shadow: none;
    border: none;
    padding: 0 1rem;
    &:focus {
        outline: none;
    }

    border: 2px groove
        ${({ theme }) =>
            theme.title === 'light' ? theme.colors.primary : 'none'};
`
