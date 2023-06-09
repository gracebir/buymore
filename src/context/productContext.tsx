import { initialStateType, productProps } from '@/type'
import { Models } from 'appwrite'
import { createContext, useState } from 'react'

type appProps = {
    children: React.ReactNode
  }

export const AppContext = createContext<initialStateType | null>(null)

export const AppProivder = ({children}:appProps) => {
    const [user, setUser] = useState<Models.Session>()
    const [cart, setCart] = useState<productProps[]>([])

    // add to basket 
    const addBasket = (item: productProps) => {
        const index = cart.findIndex(elt=> elt.$id===item.$id)
        if(index!== -1){
            const updateProd = cart.map((elt, i)=> {
                if(index===i){
                    elt.quantity += 1
                }
                return elt
            })
        setCart([...updateProd])
        } else {
            setCart([...cart, item])
        }
    }
    return (
        <AppContext.Provider value={{
            user: user!,
            setUser: setUser,
            cart: cart,
            setCart: setCart,
            addBasket
        }}>
            {children}
        </AppContext.Provider>
    )
}