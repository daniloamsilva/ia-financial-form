import { Table, TableBody, TableCell, TableRow } from "../ui/table";
import type { Expense } from "../../types/expense";

interface ExpenseTableProps {
  expenses: Expense[];
}

export function ExpenseTable({ expenses }: ExpenseTableProps) {
  const totalAmount = expenses.reduce((sum, item) => sum + item.amount, 0);

  return (
    <div>
      <Table>
        <TableBody>
          {expenses.map((item, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{item.description}</TableCell>
              <TableCell>{item.date}</TableCell>
              <TableCell>{item.category}</TableCell>
              <TableCell className="text-right">R$ {(item.amount / 100).toFixed(2)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="mt-4 flex justify-between items-center border-t p-3">
        <h2 className="text-xl font-bold">Total das despesas</h2>
        <span>R$ {(totalAmount / 100).toFixed(2)}</span>
      </div>
    </div>
  );
}