import "./App.css";
import { useState } from "react";
import { ExpenseTable } from "./components/expenses/ExpenseTable";
import { AddExpenseDialog } from "./components/expenses/AddExpenseDialog";
import type { Expense } from "./types/expense";

function App() {
  const [expenses, setExpenses] = useState<Expense[]>([
    { description: "BigMac", amount: 250, date: "2023-10-01", category: "food" },
    { description: "Passagem de onibus", amount: 150, date: "2023-10-02", category: "transport" },
    { description: "Conta de Luz", amount: 300, date: "2023-10-03", category: "utilities" },
    { description: "Cinema", amount: 400, date: "2023-10-04", category: "entertainment" },
  ]);

  const handleExpenseAdded = (expense: Expense) => {
    setExpenses(prevExpenses => [...prevExpenses, expense]);
  };

  return (
    <div className="min-h-svh">
      <div className="min-h-svh max-w-xl mx-auto flex flex-col">
        <div>
          <div className="flex justify-between items-center my-5">
            <h1 className="text-2xl font-bold">Lançamentos</h1>
            <AddExpenseDialog onExpenseAdded={handleExpenseAdded} />
          </div>
          <ExpenseTable expenses={expenses} />
        </div>
      </div>
    </div>
  );
}

export default App;