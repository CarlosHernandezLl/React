
import { ByCategoryData, ExpensesData, IncomesData, IncomeVsExpenseData } from "@/utils/constants/data"
import { CardProps } from "@/utils/interfaces"
import { PiggyBank, TrendingDown, TrendingUp } from "lucide-react"
// import { Bar, BarChart } from "recharts"
import { JSX, useEffect, useState } from "react"
import { Legend, LineChart, PolarAngleAxis, PolarGrid, RadarChart, Radar, XAxis, Tooltip, Line } from "recharts"
import { useNavigate } from "react-router"



const Card = ({ title, value, icon, color, funtion }: CardProps): JSX.Element => {

    return (
        <div onClick={funtion} className={`bg-${color} overflow-hidden shadow rounded-lg w-full sm:w-96`}>
            <div className="p-5">
                <div className="flex items-center">
                    <div className="flex-shrink-0">
                        {icon}
                    </div>
                    <div className="ml-5 w-0 flex-1">
                        <dl>
                            <dt className="text-sm font-medium text-gray-500 truncate">{title}</dt>
                            <dd className="text-2xl font-semibold text-gray-900">S/. {value}</dd>
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    )
}



const COLORS = {
    incomes: '#16A34A',
    expenses: '#FF0000',
}

const GraphicalChart = (): JSX.Element => {
    return (
        <LineChart width={400} height={300} data={IncomeVsExpenseData} >
            <XAxis dataKey="month"
                tickFormatter={(value) => value.slice(0, 3)}
            />
            <Tooltip />
            <Line type="monotone" dataKey="incomes" stroke={COLORS.incomes} fill={COLORS.incomes} />
            <Line type="monotone" dataKey="expenses" stroke={COLORS.expenses} fill={COLORS.expenses} />
        </LineChart>

    )
}

const GraphicalByCategory = (): JSX.Element => {
    return (
        <RadarChart outerRadius={90} width={400} height={300} data={ByCategoryData}>
            <PolarGrid />
            <PolarAngleAxis dataKey="category" />
            <Radar name="Expenses" dataKey="amount" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
            <Legend />
            <Tooltip />
        </RadarChart>
    )
}


export default function Dashboard(): JSX.Element {

    const navigate = useNavigate()
    const [totalIncomes, setTotalIncomes] = useState(0)
    const [totalExpenses, setTotalExpenses] = useState(0)

    const goToIncomes = () => {
        console.log('Go to Incomes')
        navigate('/incomes')
    }

    const goToExpenses = () => {
        console.log('Go to Expenses')
        navigate('/expenses')
    }

    const goToSavings = () => {
        console.log('Go to Savings')
    }

    const calculateTotalIncomes = () => {
        let total = 0
        IncomesData.forEach((element) => {
            total += element.amount
        })
        setTotalIncomes(total)
    }

    const calculateTotalExpenses = () => {
        let total = 0
        ExpensesData.forEach((element) => {
            total += element.amount
        })
        setTotalExpenses(total)
    }

    useEffect(() => {
        console.log('Dashboard')
        calculateTotalIncomes()
        calculateTotalExpenses()
    }, [IncomesData, ExpensesData])



    return (
        <>
            <main className="flex-1 relative z-0 focus:outline-none">
                <div className="px-4 sm:px-6 md:px-8 py-4">
                    <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
                </div>

                <div className="flex flex-col gap-4 sm:flex-row justify-center items-start px-4 sm:px-6 md:px-8">
                    <Card title="Incomes" value={totalIncomes} funtion={goToIncomes} color="blue" icon={<TrendingUp size={30} />} />
                    <Card title="Expenses" value={totalExpenses} funtion={goToExpenses} color="green" icon={<TrendingDown size={30} />} />
                    <Card title="Savings" value={totalIncomes - totalExpenses} funtion={goToSavings} color="purple" icon={<PiggyBank size={30} />} />
                </div>

                <span className="block h-12"></span>

                <div className="px-4 sm:px-6 md:px-8 flex flex-col md:flex-row items-start justify-start">
                    <div className="flex flex-col justify-start items-start">
                        <h1 className="py-4 text-2xl font-semibold text-gray-900 mb-2">Incomes vs Expenses</h1>
                        <GraphicalChart />
                    </div>

                    <div className="flex flex-col justify-start items-start">
                        <h1 className="py-4 text-2xl font-semibold text-gray-900 mb-2">Expenses by Category</h1>
                        <GraphicalByCategory />
                    </div>
                </div>

            </main >
        </>
    )

}