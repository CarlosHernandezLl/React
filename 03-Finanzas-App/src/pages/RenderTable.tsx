import { JSX, useEffect, useState } from "react"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { formatCurrency } from "@/lib/utils";
import { useAuth } from "@/contexts/authContext";
import { Modal } from "./Modal";
import { getExpenses, getIncomes } from "@/services/table.service";




const ExpensesTable = ({ expenses } : any): JSX.Element => {

  // const { currentUser } = useAuth();

  return (
    <Table>
      <TableCaption>A list of your recent expenses.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Date</TableHead>
          <TableHead>Amount</TableHead>
          {/* <TableHead>Source</TableHead> */}
          <TableHead>Method</TableHead>
          <TableHead>Category</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {
          expenses.map((expense: any, index: any) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{expense.date}</TableCell>
              <TableCell> {formatCurrency(expense.amount)}</TableCell>
              {/* <TableCell>{expense.source}</TableCell> */}
              <TableCell>{expense.method}</TableCell>
              <TableCell>{expense.category}</TableCell>
            </TableRow>
          ))
        }
      </TableBody>
    </Table >
  )
}

const IncomesTable = ({ incomes }: any): JSX.Element => {

  const { currentUser } = useAuth();

  return (
    <Table>
      <TableCaption>A list of your recent incomes.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Date</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Source</TableHead>
          <TableHead>Method</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {
          incomes.filter((expense: any) => expense.userId === currentUser.uid).map((invoice: any, index: number) => (

            <TableRow key={index}>
              <TableCell className="font-medium">{invoice.date}</TableCell>
              <TableCell> {formatCurrency(invoice.amount)}</TableCell>
              <TableCell>{invoice.source}</TableCell>
              <TableCell>{invoice.method}</TableCell>
            </TableRow>
          ))
        }
      </TableBody>
    </Table>
  )
}



function RenderTable(): JSX.Element {

  const { currentUser } = useAuth();

  const [expenses, setExpenses] = useState([]);
  const [incomes, setIncomes] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [isIncome, setIsIncome] = useState(false);

  useEffect(() => {
    
    getExpenses(currentUser.uid).then((data: any) => {
      setExpenses(data);
    });

    getIncomes(currentUser.uid).then((data: any) => {
      setIncomes(data);
    });

    console.log(isIncome);
  }, []);

  const addExpense = () => {
    setShowModal(true);
    setIsIncome(false);
  }

  const addIncome = () => {
    setShowModal(true);
    setIsIncome(true);
  }


  const addNewExpense = (expense: never) => {
    setExpenses([...expenses, expense]);
    setShowModal(false);

  };

  const addNewIncome = (income: never) => {
    setIncomes([...incomes, income]);
    setShowModal(false);
  }

  const cancelModal = () => {
    setShowModal(false);
  }

  const url = document.location.href;

  return (
    <>
      {
        url.includes('expenses') ?
          <div className="relative flex flex-col items-center justify-center py-4">
            <div className="absolute right-4 top-0 flex-row items-end justify-end py-4">
              <button className=" bg-blue-500 text-white px-4 py-2 rounded-lg" onClick={addExpense}>Add Expense</button>
            </div>

            <h1 className="text-2xl font-semibold text-gray-900 pb-4">Expenses</h1>
            <ExpensesTable expenses={expenses} />
            {
              showModal && <Modal addNewExpense={addNewExpense} cancelModal={cancelModal} isIncome={false} />
            }

          </div>
          :
          <div className="relative flex flex-col items-center justify-center py-4">
            <div className="absolute right-4 top-0 flex-row items-end justify-end py-4">
              <button className=" bg-blue-500 text-white px-4 py-2 rounded-lg" onClick={addIncome}>Add Income</button>
            </div>
            <h1 className="text-2xl font-semibold text-gray-900 pb-4">Incomes</h1>
            <IncomesTable incomes={incomes} />
            {
              showModal && <Modal addNewIncome={addNewIncome} cancelModal={cancelModal} isIncome={true} />
            }

          </div>
      }
    </>
  );
}

export default RenderTable;