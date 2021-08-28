import React from 'react'
import * as S from './styled'

const SearchBox = ({ handleFormSubmit, handleClear, handleQuery }) => {
    // const enteredSearch = searchInputRef.current.value
    return (
        <S.SearchWrapper>
            <S.Form onSubmit={handleFormSubmit}>
                <S.Input
                    autoFocus
                    type='text'
                    placeholder='Pesquise aqui...'
                    onChange={handleQuery}
                />{' '}
                <S.SearchIcon
                    onClick={handleFormSubmit}
                    title='Pesquisar cartões'
                />
                <S.ClearIcon
                    onClick={handleClear}
                    title='Reiniciar o programa'
                />
            </S.Form>
        </S.SearchWrapper>
    )
}

export default SearchBox
