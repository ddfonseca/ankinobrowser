import invoke from './invoke'

const createCardsArray = async (query) => {
    try {
        const cardsID = await invoke('findCards', 6, { query: query })
        const cardsInfo = await invoke('cardsInfo', 6, { cards: cardsID })
        const cards = cardsInfo.map(({ question, answer, cardId }) => ({
            question,
            answer,
            id: cardId
        }))

        return { cards, ok: true }
    } catch (err) {
        return { cards: [], ok: false }
    }
}

export default createCardsArray
