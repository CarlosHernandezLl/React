import { ChartConfig } from "@/components/ui/chart"

export const IncomesData: Array<any> = [
    {
        "invoice": "INV001",
        "status": "Paid",
        "method": "Credit Card",
        "amount": 250.00
    },
    {
        "invoice": "INV002",
        "status": "Paid",
        "method": "Paypal",
        "amount": 250.00
    },
    {
        "invoice": "INV003",
        "status": "Paid",
        "method": "Credit Card",
        "amount": 250.00
    },
    {
        "invoice": "INV004",
        "status": "Paid",
        "method": "Paypal",
        "amount": 250.00
    },
    {
        "invoice": "INV005",
        "status": "Paid",
        "method": "Credit Card",
        "amount": 250.00
    },
    {
        "invoice": "INV006",
        "status": "Paid",
        "method": "Paypal",
        "amount": 250.00
    },
    {
        "invoice": "INV007",
        "status": "Paid",
        "method": "Credit Card",
        "amount": 254.00
    },
    {
        "invoice": "INV008",
        "status": "Paid",
        "method": "Paypal",
        "amount": 251.00
    },
    {
        "invoice": "INV009",
        "status": "Paid",
        "method": "Credit Card",
        "amount": 5000
    },
    {
        "invoice": "INV010",
        "status": "Paid",
        "method": "Paypal",
        "amount": 100.00
    },
    {
        "invoice": "INV011",
        "status": "Paid",
        "method": "Credit Card",
        "amount": 250.00
    },
    {
        "invoice": "INV012",
        "status": "Paid",
        "method": "Paypal",
        "amount": 250.00
    },
    {
        "invoice": "INV013",
        "status": "Paid",
        "method": "Credit Card",
        "amount": 8000.00
    },
]

export const ExpensesData: Array<any> = [
    {
        "income": "INC001",
        "date": "01/01/2021",
        "amount": 650.00
    },
    {
        "income": "INC002",
        "date": "01/02/2021",
        "amount": 780.00
    },
    {
        "income": "INC003",
        "date": "01/03/2021",
        "amount": 1550.00
    },
    {
        "income": "INC004",
        "date": "01/04/2021",
        "amount": 250.00
    }

]

export const IncomeVsExpenseData: Array<any> = [
    {
        "month": "January",
        "incomes": 1500,
        "expenses": 1000
    },
    {
        "month": "February",
        "incomes": 2000,
        "expenses": 500
    },
    {
        "month": "March",
        "incomes": 3000,
        "expenses": 6000
    },
    {
        "month": "April",
        "incomes": 2000,
        "expenses": 3500
    },
    {
        "month": "May",
        "incomes": 2500,
        "expenses": 5000
    },
    {
        "month": "June",
        "incomes": 3000,
        "expenses": 5000
    },
    {
        "month": "July",
        "incomes": 2500,
        "expenses": 2500
    },
    {
        "month": "August",
        "incomes": 2000,
        "expenses": 1000
    },
    {
        "month": "September",
        "incomes": 3000,
        "expenses": 2000
    },
    {
        "month": "October",
        "incomes": 2500,
        "expenses": 1500
    },
    {
        "month": "November",
        "incomes": 2000,
        "expenses": 1000
    },
    {
        "month": "December",
        "incomes": 3000,
        "expenses": 4000
    },
]



export const ByCategoryData: Array<any> = [
    {
        category: "Groseries", // Icon
        "amount": 400
    },
    {
        "category": "Transportation",
        "amount": 250
    },
    {
        "category": "Health",
        "amount": 1200
    },
    {
        "category": "Entertainment",
        "amount": 50
    },
    {
        "category": "Education",
        "amount": 200
    },
    {
        "category": "Others",
        "amount": 100
    },
]



export const chartData: Array<any> = [
    { month: "January", desktop: 186, mobile: 80 },
    { month: "February", desktop: 305, mobile: 200 },
    { month: "March", desktop: 237, mobile: 120 },
    { month: "April", desktop: 73, mobile: 190 },
    { month: "May", desktop: 209, mobile: 130 },
    { month: "June", desktop: 214, mobile: 140 },

]

export const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "#8884d8"
    },
    mobile: {
        label: "Mobile",
        color: "#60a5fa"
    }

} satisfies ChartConfig