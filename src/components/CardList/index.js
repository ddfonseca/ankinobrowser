import React from 'react'
import Card from '../Card'
import * as S from './styled'

// import useKeyPress from '../../utils/useKeyPress'

const CardList = ({ cards }) => {
    return (
        <S.CardListWrapper>
            {cards.map((card) => (
                <Card card={card} key={card.id} />
            ))}
        </S.CardListWrapper>
    )
}

export default CardList
