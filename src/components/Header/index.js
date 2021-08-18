import React, { useContext } from 'react'
import Switch from 'react-switch'
import { ThemeContext } from 'styled-components'
import { shade } from 'polished'

import * as S from './styled'

const Header = ({ toggleTheme }) => {
    const { colors, title } = useContext(ThemeContext)

    return (
        <S.Container>
            <S.ContainerFixedWidth>
                <S.Title>Anki no Browser</S.Title>
                <Switch
                    onChange={toggleTheme}
                    checked={title === 'dark'}
                    checkedIcon={false}
                    uncheckedIcon={false}
                    height={10}
                    width={40}
                    handleDiameter={20}
                    offColor={shade(0.3, colors.primary)}
                    onColor={colors.secundary}
                />
            </S.ContainerFixedWidth>
        </S.Container>
    )
}

export default Header
