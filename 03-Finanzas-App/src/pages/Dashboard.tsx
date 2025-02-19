
import { CardProps } from "@/utils/interfaces"
import { PiggyBank, TrendingDown, TrendingUp } from "lucide-react"
import { JSX } from "react"
import { useNavigate } from "react-router"
import { formatCurrency } from "@/lib/utils"
import { useAuth } from "@/contexts/authContext"
import { GraphicalByCategory, GraphicalChart, GraphicalSavings } from "./Graphics"
import { useCalculate } from "@/hooks/useCalculate"

// const user = sessionStorage.getItem('user') ? JSON.parse(sessionStorage.getItem('user')!) : null

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
                            <dd className="text-2xl font-semibold text-gray-900">{formatCurrency(value)}</dd>
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default function Dashboard(): JSX.Element {

    const { currentUser } = useAuth()

    const navigate = useNavigate()
    const { totalIncomes, totalExpenses, graphicalData, graphicalDataSavings, graphicalDataByCategory } = useCalculate()


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


    return (
        <>
            <main className="flex-col relative z-0 focus:outline-none">
                <div className="px-4 sm:px-6 md:px-8 py-4">
                    <h1 className="text-2xl font-semibold text-gray-900">Dashboard de {currentUser.displayName ? currentUser.displayName : 'Anonymus'}</h1>
                </div>

                <div className="flex flex-col gap-4 sm:flex-row justify-center items-start px-4 sm:px-6 md:px-8">
                    <Card title="Incomes" value={totalIncomes} funtion={goToIncomes} color="blue" icon={<TrendingUp size={30} />} />
                    <Card title="Expenses" value={totalExpenses} funtion={goToExpenses} color="green" icon={<TrendingDown size={30} />} />
                    <Card title="Savings" value={totalIncomes - totalExpenses} funtion={goToSavings} color="purple" icon={<PiggyBank size={30} />} />
                </div>

                <span className="block h-12"></span>

                {/* <div className="flex flex-col    lg:flex-row justify-between items-start px-4 sm:px-6 md:px-8"> */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
                    <div className="flex flex-col justify-start items-start">
                        <h1 className="py-4 text-2xl font-semibold text-gray-900 mb-2">Incomes vs Expenses</h1>
                        <GraphicalChart graphicalData={graphicalData} />
                    </div>

                    <div className="flex flex-col justify-start items-start">
                        <h1 className="py-4 text-2xl font-semibold text-gray-900 mb-2">Savings by Month</h1>
                        <GraphicalSavings graphicalData={graphicalDataSavings} />
                    </div>

                    <div className="flex flex-col justify-start items-start">
                        <h1 className="py-4 text-2xl font-semibold text-gray-900 mb-2">Expenses by Category</h1>
                        <GraphicalByCategory graphicalData={graphicalDataByCategory} />
                    </div>

                </div>

            </main >
        </>
    )

}