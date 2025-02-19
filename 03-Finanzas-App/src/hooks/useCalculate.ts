import { useAuth } from "@/contexts/authContext"
import { calculateByCategory, calculateIncomesvsExpensesbyMonth, calculateSavingsbyMonth, calculateTotalExpenses, calculateTotalIncomes } from "@/services/dashboard.service"
import { useEffect, useState } from "react"

export const useCalculate = () => {

    const { currentUser } = useAuth()
    const [totalIncomes, setTotalIncomes] = useState(0)
    const [totalExpenses, setTotalExpenses] = useState(0)
    const [graphicalData, setGraphicalData] = useState<any>([])
    const [graphicalDataSavings, setGraphicalDataSavings] = useState<any>([])
    const [graphicalDataByCategory, setGraphicalDataByCategory] = useState<any>([])
    
    useEffect(() => {

        calculateByCategory(currentUser.uid).then((data) => {
            setGraphicalDataByCategory(data)
        })

        calculateSavingsbyMonth(currentUser.uid).then((data) => {
            setGraphicalDataSavings(data)
        })

        calculateIncomesvsExpensesbyMonth(currentUser.uid).then((data) => {
            setGraphicalData(data)
        })

        calculateTotalIncomes(currentUser.uid).then((data) => {
            setTotalIncomes(data)
        })

        calculateTotalExpenses(currentUser.uid).then((data) => {
            setTotalExpenses(data)
        })

    }, [])

    return {
        totalIncomes,
        totalExpenses,
        graphicalData,
        graphicalDataSavings,
        graphicalDataByCategory
    }

}

