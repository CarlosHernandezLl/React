import { Legend, LineChart, PolarAngleAxis, PolarGrid, RadarChart, Radar, XAxis, Tooltip, Line, YAxis, Bar, BarChart, ResponsiveContainer } from "recharts"
// import { ByCategoryData, CATEGORY, ExpensesData, IncomesData, IncomeVsExpenseData, SavingsData } from "@/utils/constants/data"
import { JSX } from "react"


const COLORS = {
    incomes: '#16A34A',
    expenses: '#FF0000',
}

const GraphicalSavings = ({ graphicalData }: any): JSX.Element => {


    return (
        <ResponsiveContainer width="100%" height={300}>
            <BarChart data={graphicalData} >
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="savings" barSize={20} fill="#413ea0" />
            </BarChart>
        </ResponsiveContainer>
    )
}


const GraphicalChart = ({ graphicalData }: any): JSX.Element => {

    return (
        <ResponsiveContainer width="100%" height={300}>
            <LineChart data={graphicalData} >
                <XAxis dataKey="month"
                    tickFormatter={(value) => value.slice(0, 3)}
                />
                <YAxis />
                <Tooltip />
                <Line dataKey="incomes" stroke={COLORS.incomes} fill={COLORS.incomes} />
                <Line dataKey="expenses" stroke={COLORS.expenses} fill={COLORS.expenses} />
                <Legend />
            </LineChart>
        </ResponsiveContainer>

    )
}

const GraphicalByCategory = ({ graphicalData }: any): JSX.Element => {

    return (
        <ResponsiveContainer width="100%" height={300}>
            <RadarChart outerRadius={90} width={400} height={300}
                data={graphicalData}>
                <PolarGrid />
                <PolarAngleAxis dataKey={
                    'category'
                } />
                <Radar name="Expenses" dataKey="amount" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                <Legend />
                <Tooltip />
            </RadarChart>
        </ResponsiveContainer>


    )
}

export {
    GraphicalChart,
    GraphicalByCategory,
    GraphicalSavings

}