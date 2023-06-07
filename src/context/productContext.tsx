import { createContext, useReducer } from 'react'

const initialState = {
    cart: {},
    user: {}
}

type appProps = {
    children: React.ReactNode
  }

const AppContext = createContext(initialState)

export const AppProivder = ({children}:appProps) => {
    return (
        <AppContext.Provider value={{
            cart: {},
            user: {}
        }}>
            {children}
        </AppContext.Provider>
    )
}