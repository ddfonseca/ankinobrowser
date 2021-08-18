import React from 'react'
import * as S from './styled'

const SearchBox = ({ handleFormSubmit }) => {
    return (
        <S.SearchWrapper>
            <S.Form onSubmit={handleFormSubmit}>
                <S.Input autoFocus type="text" placeholder="Pesquise aqui..." />{' '}
                <S.SearchIcon onClick={handleFormSubmit} />
            </S.Form>
        </S.SearchWrapper>
    )
}

export default SearchBox
