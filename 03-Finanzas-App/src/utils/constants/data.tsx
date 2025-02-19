import { ChartConfig } from "@/components/ui/chart"

interface IncomeData {
    date: string;
    amount: number;
    source: string;
    method: string;
    category: string;
    userId: string;
}

interface ExpenseData {
    date: string;
    amount: number;
    source: string;
    method: string;
    category: string;
    userId: string;
}

export const IncomesData: Array<IncomeData> = [
    {
        "userId": "qnYYnrvO04VS8GZ2rbNiryXzH6u2",
        "date": "01/01/2021",
        "amount": 150.00,
        "source": "Salary",
        "method": "Credit Card",
        "category": "Others"
    },
    {
        "userId": "qnYYnrvO04VS8GZ2rbNiryXzH6u2",
        "date": "01/01/2021",
        "amount": 1500.00,
        "source": "Salary",
        "method": "Credit Card",
        "category": "Others"
    },
    {
        "userId": "qnYYnrvO04VS8GZ2rbNiryXzH6u2",
        "date": "01/03/2021",
        "amount": 1500.00,
        "source": "Salary",
        "method": "Credit Card",
        "category": "Others"
    },
    {
        "userId": "qnYYnrvO04VS8GZ2rbNiryXzH6u2",
        "date": "01/04/2021",
        "amount": 5450.00,
        "source": "Freelance",
        "method": "Cash",
        "category": "Others"
    }
]

export const ExpensesData: Array<ExpenseData> = [
    {
        "userId": "qnYYnrvO04VS8GZ2rbNiryXzH6u2",
        "date": "01/01/2021",
        "amount": 1150.54,
        "source": "Market",
        "method": "Credit Card",
        "category": "Groceries"
    },
    {
        "userId": "qnYYnrvO04VS8GZ2rbNiryXzH6u2",
        "date": "01/04/2021",
        "amount": 3000.00,
        "source": "Market",
        "method": "Cash",
        "category": "Transportation"
    },
    {
        "userId": "qnYYnrvO04VS8GZ2rbNiryXzH6u2",
        "date": "01/03/2021",
        "amount": 1150.00,
        "source": "Market",
        "method": "Credit Card",
        "category": "Entertainment"
    },
    {
        "userId": "qnYYnrvO04VS8GZ2rbNiryXzH6u2",
        "date": "01/04/2021",
        "amount": 2250.00,
        "source": "Market",
        "method": "Cash",
        "category": "Others"
    },
    {
        "userId": "qnYYnrvO04VS8GZ2rbNiryXzH6u2",
        "date": "01/04/2021",
        "amount": 2250.00,
        "source": "Market",
        "method": "Cash",
        "category": "Education"
    }


]

export const IncomeVsExpenseData: Array<any> = [
    {
        "userId": "qnYYnrvO04VS8GZ2rbNiryXzH6u2",
        "month": "January",
        "incomes": 1500.50,
        "expenses": 1000
    },
    {
        "userId": "qnYYnrvO04VS8GZ2rbNiryXzH6u2",
        "month": "February",
        "incomes": 2000,
        "expenses": 500
    },
    {
        "userId": "qnYYnrvO04VS8GZ2rbNiryXzH6u2",
        "month": "March",
        "incomes": 3000,
        "expenses": 6000
    },
    {
        "userId": "qnYYnrvO04VS8GZ2rbNiryXz",
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

export const SavingsData: Array<any> = [
    {
        "userId": "qnYYnrvO04VS8GZ2rbNiryXzH6u2",
        "month": "January",
        "saving": 500,
    },
    {
        "userId": "qnYYnrvO04VS8GZ2rbNiryXzH6u2",
        "month": "February",
        "saving": 1500,
    },
    {
        "userId": "qnYYnrvO04VS8GZ2rbNiryXzH6u2",
        "month": "March",
        "saving": 2000,
    },
    {
        "userId": "qnYYnrvO04VS8GZ2rbNiryXzH6u2",
        "month": "April",
        "saving": 500,
    },
    {
        "month": "May",
        "saving": 1000,
    },
    {
        "month": "June",
        "saving": 1500,
    },
    {
        "month": "July",
        "saving": 2000,
    },
    {
        "month": "August",
        "saving": 2500,
    },
    {
        "month": "September",
        "saving": 1000,
    },
    {
        "month": "October",
        "saving": 3500,
    },
    {
        "month": "November",
        "saving": 300,
    },
    {
        "month": "December",
        "saving": 4500,
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

export const CATEGORY = [
    "Groceries",
    "Transportation",
    "Health",
    "Entertainment",
    "Education",
    "Others"
]