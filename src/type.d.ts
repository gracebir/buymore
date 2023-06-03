type dropdownProps = {
    text: string
    setText: React.Dispatch<React.SetStateAction<string>>
}

export type productProps = {
    id: number
    title: string
    price: number
    category: string
    description?: string
    image: string
}