import React from 'react'
import { ThemeProvider } from 'styled-components'
import Header from '../Header'
import usePeristedState from '../../utils/usePersistedState'
import GlobalStyle from '../../styles/global'

import light from '../../styles/themes/light'
import dark from '../../styles/themes/dark'

import * as S from './styled'

const Layout = ({ children }) => {
    const [theme, setTheme] = usePeristedState('theme', light)

    const toggleTheme = () => {
        setTheme(theme.title === 'light' ? dark : light)
    }
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Header toggleTheme={toggleTheme} />
            <S.LayoutWrapper>{children}</S.LayoutWrapper>
        </ThemeProvider>
    )
}

export default Layout
