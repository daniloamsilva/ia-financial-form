import { WandSparkles } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger
} from "../ui/dialog";
import { ExpenseForm } from "./ExpenseForm";
import { ExpenseReview } from "./ExpenseReview";
import { type SubmitHandler } from "react-hook-form";
import type { Expense, ExpenseFormInputs } from "../../types/expense";

interface AddExpenseDialogProps {
  onExpenseAdded?: (expense: Expense) => void;
}

export function AddExpenseDialog({ onExpenseAdded }: AddExpenseDialogProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isReviewStep, setIsReviewStep] = useState(false);
  const [processedData, setProcessedData] = useState<Expense | null>(null);

  const onSubmit: SubmitHandler<ExpenseFormInputs> = async (data) => {
    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:8000';
      const response = await fetch(`${apiUrl}/parse-expense`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: data.naturalMessage }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const processedExpense: Expense = await response.json();

      setProcessedData(processedExpense);
      setIsReviewStep(true);
    } catch (error) {
      console.error('Error processing expense:', error);
    }
  };

  const handleBack = () => {
    setIsReviewStep(false);
    setProcessedData(null);
  };

  const handleSave = (editedExpense: Expense) => {
    onExpenseAdded?.(editedExpense);
    setIsReviewStep(false);
    setProcessedData(null);
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button type="button" size="icon">
          <WandSparkles />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        {!isReviewStep ? (
          <ExpenseForm
            onSubmit={onSubmit}
          />
        ) : (
          processedData && (
            <ExpenseReview
              expense={processedData}
              onBack={handleBack}
              onSave={handleSave}
            />
          )
        )}
      </DialogContent>
    </Dialog>
  );
}