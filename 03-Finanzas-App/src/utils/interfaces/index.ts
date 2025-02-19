import { JSX } from "react"

export interface CardProps {
    title: string
    value: number
    icon: JSX.Element
    color: string
    funtion: () => void
}

export interface IncomesAndExpensesData {
    month: string,
    incomes: number,
    expenses: number
}

export interface SavingsData {
    month: string,
    savings: number
}
