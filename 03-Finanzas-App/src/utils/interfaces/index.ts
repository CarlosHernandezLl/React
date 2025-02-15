import { JSX } from "react"

export interface CardProps {
    title: string
    value: number
    icon: JSX.Element
    color: string
    funtion: () => void
}