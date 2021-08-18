import React from 'react'
import * as S from './styled'

const Card = ({ question, answer, id }) => {
    return (
        <S.CardWrapper className="card nightMode">
            <S.Question>{question}</S.Question>
            <S.Answer>{answer}</S.Answer>
        </S.CardWrapper>
    )
}

export default Card
