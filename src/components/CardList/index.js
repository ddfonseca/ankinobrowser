import React from 'react'
import Card from '../Card'
import * as S from './styled'

const CardList = ({ cards }) => {
    return (
        <S.CardListWrapper>
            {cards.map(({ question, answer, id }) => (
                <Card question={question} answer={answer} key={id} />
            ))}
        </S.CardListWrapper>
    )
}

export default CardList
