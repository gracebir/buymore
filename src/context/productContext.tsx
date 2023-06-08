import { initialStateType } from '@/type'
import { Models } from 'appwrite'
import { createContext, useReducer, useState } from 'react'

const initialState:initialStateType = {
    user: {
        $id:'',
    },
}

type appProps = {
    children: React.ReactNode
  }

export const AppContext = createContext(initialState)

export const AppProivder = ({children}:appProps) => {
    const [user, setUser] = useState<Models.Session>()
    return (
        <AppContext.Provider value={{
            user: user!,
            setUser: setUser
        }}>
            {children}
        </AppContext.Provider>
    )
}