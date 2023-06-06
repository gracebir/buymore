type dropdownProps = {
    text: string
    setText: React.Dispatch<React.SetStateAction<string>>
}

export type productProps = {
    id?: number
    title: string
    price: number
    category: string
    description?: string
    image: string
}

export type productsProp = {
    products: Array<productProps>
}

export type inputType = {
    label: string
    placeholder: string
    typeInput: string
    onChange?: (e:React.ChangeEvent<HTMLInputElement>) => void
}