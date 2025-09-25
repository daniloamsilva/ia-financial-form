export type Expense = {
  description: string;
  amount: number;
  date: string;
  category: string;
};

export type ExpenseFormInputs = {
  naturalMessage: string;
};

export type ExpenseReviewInputs = {
  description: string;
  amount: string;
  date: Date;
  category: string;
};
