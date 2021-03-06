import { useState, useEffect } from 'react'

const usePersistedState = (key, initialState) => {
    const storageValue = localStorage.getItem(key)
    const getValue = storageValue ? JSON.parse(storageValue) : initialState

    const [state, setState] = useState(getValue)

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state))
    }, [key, state])

    return [state, setState]
}

export default usePersistedState
