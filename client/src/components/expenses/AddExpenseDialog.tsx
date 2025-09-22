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

  const onSubmit: SubmitHandler<ExpenseFormInputs> = async () => {
    await new Promise(resolve => setTimeout(resolve, 2000));

    const processedExpense: Expense = {
      description: "McDonald's",
      amount: 48.50,
      date: "2025-09-21",
      category: "food"
    };

    setProcessedData(processedExpense);
    setIsReviewStep(true);
  };

  const handleBack = () => {
    setIsReviewStep(false);
    setProcessedData(null);
  };

  const handleSave = () => {
    if (processedData) {
      onExpenseAdded?.(processedData);
    }
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