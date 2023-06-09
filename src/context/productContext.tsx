import { initialStateType, productProps } from '@/type'
import { Models } from 'appwrite'
import { createContext, useEffect, useState } from 'react'

const initialState: Partial<initialStateType>={}

type appProps = {
    children: React.ReactNode
  }

export const AppContext = createContext(initialState)

export const AppProivder = ({children}:appProps) => {
    const [user, setUser] = useState<Models.Session>()
    const [cart, setCart] = useState<productProps[]>([])

    // add to basket 
    const addBasket = (item: productProps) => {
        localStorage.removeItem("carts")
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
        localStorage.setItem("carts", JSON.stringify([...cart]))
    }

    // decrement quantity 
    const decreaseQuantity = (id: string) => {
        localStorage.removeItem("carts")
        const index = cart.findIndex(elt=> elt.$id===id)
        if(index!== -1){
            const updateProd = cart.map((elt, i)=> {
                if(index===i){
                    if(elt.quantity > 1){
                        elt.quantity -= 1
                    }
                }
                return elt
            })
        setCart([...updateProd])
        } 
        localStorage.setItem("carts", JSON.stringify([...cart]))
    }

    const removeToBasket = (id: string) => {
        localStorage.removeItem("carts")
        const remainItems = cart.filter((item)=> item.$id !== id)
        setCart([...remainItems])
        localStorage.setItem("carts", JSON.stringify([...remainItems]))
    }

    // fetching cart data from localstorage
    useEffect(()=> {
        if(localStorage.getItem("carts")){
            const items = JSON.parse(localStorage.getItem('carts')!)
            setCart([...items])
        }
    }, [])

    // quantity of products in the cart
    let cartQuantities = cart.reduce((prev, current)=> prev + current.quantity, 0)

    let subTotal = parseInt(cart.reduce((prev, current)=> prev + (current.price * current.quantity), 0).toFixed(2))

    return (
        <AppContext.Provider value={{
            user: user,
            setUser: setUser,
            cart: cart,
            setCart: setCart,
            addBasket,
            qty: cartQuantities,
            subTotal,
            decreaseQuantity,
            removeToBasket
        }}>
            {children}
        </AppContext.Provider>
    )
}