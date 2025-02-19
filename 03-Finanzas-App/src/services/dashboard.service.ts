import { CATEGORY } from "@/utils/constants/data"
import { getExpenses, getIncomes } from "./table.service"


const calculateTotalIncomes = async (userId: string) => {
    let total = 0
    const arrayIncomes = await getIncomes(userId)
    arrayIncomes.forEach((element: any) => {
        total += parseInt(element.amount)
    })

    return total
}

const calculateTotalExpenses = async (userId: string) => {
    let total = 0
    const arrayExpenses = await getExpenses(userId)
    arrayExpenses.forEach((element: any) => {
        total += parseInt(element.amount)
    })
    return total
}

interface IncomesAndExpensesData {
    month: string,
    incomes: number,
    expenses: number
}

interface SavingsData {
    month: string,
    savings: number
}

const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

const calculateIncomesvsExpensesbyMonth = async (userId: string) => {

    // let arr: Array<IncomesAndExpensesData> = []
    let arr: Array<any> = []
    const arrayIncomes = await getIncomes(userId)
    const ExpensesData = await getExpenses(userId)

    MONTHS.forEach((month, index) => {

        let data: IncomesAndExpensesData = structuredClone({ month: "", incomes: 0, expenses: 0 })
        let totalIncomes = 0
        let totalExpenses = 0

        arrayIncomes.forEach((element: any) => {
            if (element.userId === userId && parseInt(element.date.split("/")[1]) === (index + 1)) {
                totalIncomes += parseInt(element.amount)
            }
        })

        ExpensesData.forEach((element: any) => {
            if (element.userId === userId && parseInt(element.date.split("/")[1]) === (index + 1)) {
                totalExpenses += parseInt(element.amount)
            }
        })

        data.month = month
        data.incomes = totalIncomes
        data.expenses = totalExpenses

        arr.push(data)
    })

    return arr
}

const calculateSavingsbyMonth = async (userId: string) => {

    let arr: Array<SavingsData> = []

    const arrayIncomes = await getIncomes(userId)
    const ExpensesData = await getExpenses(userId)

    MONTHS.forEach((month, index) => {
        let data: SavingsData = structuredClone({ month: "", savings: 0 })
        let totalIncomes = 0
        let totalExpenses = 0

        arrayIncomes.forEach((element: any) => {
            if (element.userId === userId && parseInt(element.date.split("/")[1]) === (index + 1)) {
                totalIncomes += parseInt(element.amount)
            }
        })

        ExpensesData.forEach((element: any) => {
            if (element.userId === userId && parseInt(element.date.split("/")[1]) === (index + 1)) {
                totalExpenses += parseInt(element.amount)
            }
        })

        data.month = month
        data.savings = totalIncomes - totalExpenses

        arr.push(data)

    })

    return arr
}

const calculateByCategory = async (userId: string) => {
    let arr: Array<any> = []

    const ExpensesData = await getExpenses(userId)

    CATEGORY.forEach((category: any) => {
        let data = structuredClone({ category: "", amount: 0 })
        data.category = category
        data.amount = 0
        ExpensesData.forEach((element: any) => {
            if (element.userId === userId && element.category === category) {
                data.amount +=  parseInt(element.amount)
            }
        })
        arr.push(data)
    })

    return arr
}

export {
    calculateTotalIncomes,
    calculateTotalExpenses,
    calculateIncomesvsExpensesbyMonth,
    calculateSavingsbyMonth,
    calculateByCategory
}