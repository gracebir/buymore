import { initialStateType, productProps } from '@/type'
import { Models } from 'appwrite'
import { createContext, useState } from 'react'

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
    const [cart, setCart] = useState<productProps[]>([])
    return (
        <AppContext.Provider value={{
            user: user!,
            setUser: setUser,
            cart: cart,
            setCart: setCart
        }}>
            {children}
        </AppContext.Provider>
    )
}