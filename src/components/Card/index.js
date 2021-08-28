import React, { useState, useContext } from 'react'
import { ThemeContext } from 'styled-components'
import * as S from './styled'

const Card = ({ card }) => {
    const [showAnswer, setShowAnswer] = useState(false)
    const toggleAnswer = () => {
        setShowAnswer(showAnswer === false ? true : false)
    }

    const { title } = useContext(ThemeContext)
    const classDark = title === 'dark' ? 'nightMode' : ''

    return (
        <S.CardWrapper className={`card ${classDark}`} onClick={toggleAnswer}>
            {!showAnswer && (
                <S.Question
                    dangerouslySetInnerHTML={{ __html: card.question }}
                    // onClick={toggleAnswer}
                ></S.Question>
            )}
            {showAnswer && (
                <S.Answer
                    dangerouslySetInnerHTML={{ __html: card.answer }}
                    // onClick={toggleAnswer}
                ></S.Answer>
            )}
        </S.CardWrapper>
    )
}

export default Card
