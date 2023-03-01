import { createContext, useContext, useEffect, useReducer } from 'react'
import { reducer } from '../reducers/reducer'
import { data } from '../data/data'

export const AppContext = createContext({
  dispatcher: () => null,
  state: {},
})

export const AppContextProvider = ({ children }) => {
  const [state, dispatcher] = useReducer(reducer, data)
  const { category } = state

  useEffect(() => {}, [category])

  useEffect(() => {
    const total = category.reduce((acc, each) => {
      return each.total + acc
    }, 0)

    dispatcher({ type: 'GRAND_TOTAL', payLoad: total })
  }, [category])

  const value = { dispatcher, state }
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}
