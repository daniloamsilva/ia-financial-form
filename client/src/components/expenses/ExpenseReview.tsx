import { Button } from "../ui/button";
import {
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from "../ui/dialog";
import type { Expense } from "../../types/expense";

interface ExpenseReviewProps {
  expense: Expense;
  onBack: () => void;
  onSave: () => void;
}

export function ExpenseReview({ expense, onBack, onSave }: ExpenseReviewProps) {
  return (
    <div>
      <DialogHeader>
        <DialogTitle>Revisar despesa</DialogTitle>
        <DialogDescription>
          Verifique se as informações extraídas estão corretas antes de salvar.
        </DialogDescription>
      </DialogHeader>
      <div className="space-y-4 my-4">
        <div>
          <label className="text-sm font-medium">Descrição</label>
          <div className="border rounded p-2 bg-gray-50">{expense.description}</div>
        </div>
        <div>
          <label className="text-sm font-medium">Valor</label>
          <div className="border rounded p-2 bg-gray-50">R$ {expense.amount.toFixed(2)}</div>
        </div>
        <div>
          <label className="text-sm font-medium">Data</label>
          <div className="border rounded p-2 bg-gray-50">{expense.date}</div>
        </div>
        <div>
          <label className="text-sm font-medium">Categoria</label>
          <div className="border rounded p-2 bg-gray-50">{expense.category}</div>
        </div>
      </div>
      <DialogFooter>
        <Button variant="outline" onClick={onBack}>
          Voltar
        </Button>
        <DialogClose asChild>
          <Button onClick={onSave}>
            Salvar despesa
          </Button>
        </DialogClose>
      </DialogFooter>
    </div>
  );
}