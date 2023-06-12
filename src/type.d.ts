import { Models } from 'appwrite'

export type dropdownProps = {
    text: string
    setText: React.Dispatch<React.SetStateAction<string>>
    banner?: string
}

export type dropdownInputProps = {
    text: string
    setText: React.Dispatch<React.SetStateAction<string>>
    data: Array<string>
    placeholder: string
    label: string
}

export type productProps = {
    $id?: string
    title: string
    price: number
    category: string
    description?: string
    image: string
    quantity: number
}

export type productsProp = {
    products: Array<productProps>
}

export interface productsDocumentProps extends Partial<Models.Document> {
    title: string
    price: number
    category: string
    quantity: number
    description?: string
    image: string
    $id?: string
}

export type productsDocumentProp = {
    products: Array<productsDocumentProps>
}

export interface productTypes extends Partial<Models.Document[]>{
    products: Array<productsDocumentProps>
}


export type inputType = {
    label: string
    placeholder: string
    value?: string | number
    typeInput: string
    id: string
    isError?: boolean
    errorMsg?: string
    onChange?: (e:React.ChangeEvent<HTMLInputElement>) => void
    className?: string
}

export type initialStateType={
    user?: Partial<Models.Session>
    setUser?: Dispatch<SetStateAction<Models.Session | undefined>>
    cart: Array<productProps>
    setCart: Dispatch<SetStateAction<productProps[]>>
    qty: number
    subTotal: number
    addBasket: (product: productProps) => void
    decreaseQuantity: (id:string) => void
    removeItem: (id:string) => void
}