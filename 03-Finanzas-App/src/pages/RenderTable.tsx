import { JSX } from "react"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { ExpensesData, IncomesData } from "@/utils/constants/data";

const ExpensesTable = (): JSX.Element => {
  return (
    <Table>
      <TableCaption>A list of your recent expenses.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {
          ExpensesData.map((invoice, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{invoice.invoice}</TableCell>
              <TableCell>{invoice.status}</TableCell>
              <TableCell>{invoice.method}</TableCell>
              <TableCell className="text-right">{invoice.amount}</TableCell>
            </TableRow>
          ))
        }
      </TableBody>
    </Table>
  )
}

const IncomesTable = (): JSX.Element => {
  return (
    <Table>
      <TableCaption>A list of your recent incomes.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {
          IncomesData.map((invoice, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{invoice.invoice}</TableCell>
              <TableCell>{invoice.status}</TableCell>
              <TableCell>{invoice.method}</TableCell>
              <TableCell className="text-right">{invoice.amount}</TableCell>
            </TableRow>
          ))
        }
      </TableBody>
    </Table>
  )
}


function RenderTable(): JSX.Element {

  const url = document.location.href;

  return (
    <>
      {
        url.includes('expenses') ?
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-2xl font-semibold text-gray-900">Expenses</h1>
            <ExpensesTable />
          </div>
          : <div className="flex flex-col items-center justify-center">
            <h1 className="text-2xl font-semibold text-gray-900">Incomes</h1>
            <IncomesTable />
          </div>
      }
    </>
  );
}

export default RenderTable;