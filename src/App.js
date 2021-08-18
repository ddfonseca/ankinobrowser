import { useState } from 'react'
import CardList from './components/CardList'
import Layout from './components/Layout'
import SearchBox from './components/SearchBox'

const IndexPage = () => {
    const [cards, setCards] = useState([])

    const handleFormSubmit = (event) => {
        event.preventDefault()
        console.log('hello')
    }
    return (
        <Layout>
            <SearchBox handleFormSubmit={handleFormSubmit} />
            <CardList cards={cards} />
        </Layout>
    )
}

export default IndexPage
