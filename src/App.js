import { useState } from 'react'
import CardList from './components/CardList'
import Layout from './components/Layout'
import SearchBox from './components/SearchBox'
import MessageError from './components/HandleFetchCards/MessageError'
import Loading from './components/HandleFetchCards/Loading'

import createCardsArray from './utils/createCardsArray'
import usePersistedState from './utils/usePersistedState'

const IndexPage = () => {
    const [cards, setCards] = usePersistedState('cards', [])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)
    const [query, setQuery] = useState('')

    const handleButtonDismiss = () => {
        setError(false)
    }

    const handleQuery = (event) => {
        setQuery(event.target.value)
    }

    const handleFormSubmit = async (event, uQuery) => {
        event.preventDefault()
        setIsLoading(true)
        setQuery(uQuery)
        // const query = '"deck:0. Main::Quotes"'

        console.log(query)
        if (query === undefined) {
            setError(true)
            // mensagem de erro
        }
        const response = await createCardsArray(query)
        if (!response.ok) {
            setIsLoading(false)
            setError(true)
            return
        }
        if (response.ok) {
            // console.log(response.cards)
            setCards(response.cards)
            setIsLoading(false)
        }
    }

    const handleClear = () => {
        setIsLoading(false)
        setError(false)
        setCards([])
    }

    // content = <MessageError handleButtonDismiss={handleButtonDismiss} />
    // content = <CardList cards={cards} />
    return (
        <Layout>
            <SearchBox
                handleFormSubmit={handleFormSubmit}
                handleClear={handleClear}
                handleQuery={handleQuery}
            />
            {error && (
                <MessageError handleButtonDismiss={handleButtonDismiss} />
            )}
            {!error && isLoading && <Loading />}
            {!error && <CardList cards={cards} />}
        </Layout>
    )
}

export default IndexPage
