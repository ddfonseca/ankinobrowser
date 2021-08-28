import styled from 'styled-components'

export const CardWrapper = styled.li`
    /* border: 1px solid green; */
    margin-top: 15px;
    padding: 20px;
    border-radius: 15px;

    &:hover {
        outline: 2px solid ${({ theme }) => theme.colors.hover};
        cursor: pointer;
    }
`

export const Question = styled.div``
export const Answer = styled.div``
