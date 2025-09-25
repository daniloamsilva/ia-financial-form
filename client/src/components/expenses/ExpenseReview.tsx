import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { CurrencyInput } from "../ui/currency";
import {
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from "../ui/dialog";
import type { Expense, ExpenseReviewInputs } from "../../types/expense";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { ChevronDownIcon } from "lucide-react";
import { Calendar } from "../ui/calendar";
import { useState } from "react";
import { useForm, Controller, type SubmitHandler } from "react-hook-form";

interface ExpenseReviewProps {
  expense: Expense;
  onBack: () => void;
  onSave: (expense: Expense) => void;
}

export function ExpenseReview({ expense, onBack, onSave }: ExpenseReviewProps) {
  const [openCalendar, setOpenCalendar] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<ExpenseReviewInputs>({
    defaultValues: {
      description: expense.description,
      amount: expense.amount.toString(),
      date: new Date(expense.date),
      category: expense.category,
    },
  });

  const watchedDate = watch("date");

  const onSubmit: SubmitHandler<ExpenseReviewInputs> = (data) => {
    const updatedExpense: Expense = {
      description: data.description,
      amount: parseFloat(data.amount),
      date: data.date.toISOString().split('T')[0],
      category: data.category,
    };
    onSave(updatedExpense);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <DialogHeader>
        <DialogTitle>Revisar despesa</DialogTitle>
        <DialogDescription>
          Verifique se as informações extraídas estão corretas antes de salvar.
        </DialogDescription>
      </DialogHeader>
      <div className="space-y-4 my-4">
        <div className="grid w-full max-w-sm items-center gap-2">
          <Label htmlFor="description">Descrição</Label>
          <Input
            id="description"
            {...register("description", { required: "A descrição é obrigatória" })}
            disabled={isSubmitting}
          />
          {errors.description && (
            <span className="text-red-500 text-sm">{errors.description.message}</span>
          )}
        </div>
        <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
          <div className="space-y-2">
            <Label htmlFor="amount">Valor</Label>
            <Controller
              name="amount"
              control={control}
              rules={{
                required: "O valor é obrigatório",
                validate: (value) => {
                  const num = parseFloat(value);
                  return !isNaN(num) && num > 0 || "Digite um valor válido maior que zero";
                }
              }}
              render={({ field }) => (
                <CurrencyInput
                  value={field.value}
                  onChange={field.onChange}
                />
              )}
            />
            {errors.amount && (
              <span className="text-red-500 text-sm">{errors.amount.message}</span>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="date">Data</Label>
            <Controller
              name="date"
              control={control}
              rules={{ required: "A data é obrigatória" }}
              render={({ field }) => (
                <Popover open={openCalendar} onOpenChange={setOpenCalendar}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      id="date"
                      type="button"
                      disabled={isSubmitting}
                      className="w-full justify-between font-normal h-9 border-input [&_svg]:text-muted-foreground [&_svg]:opacity-50"
                    >
                      {watchedDate ? watchedDate.toLocaleDateString() : "Selecione uma data"}
                      <ChevronDownIcon />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto overflow-hidden p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      captionLayout="dropdown"
                      onSelect={(date) => {
                        field.onChange(date);
                        setOpenCalendar(false);
                      }}
                    />
                  </PopoverContent>
                </Popover>
              )}
            />
            {errors.date && (
              <span className="text-red-500 text-sm">{errors.date.message}</span>
            )}
          </div>
        </div>
        <div className="grid w-full max-w-sm items-center gap-2">
          <Label htmlFor="category">Categoria</Label>
          <Controller
            name="category"
            control={control}
            rules={{ required: "A categoria é obrigatória" }}
            render={({ field }) => (
              <Select
                value={field.value}
                onValueChange={field.onChange}
                disabled={isSubmitting}
              >
                <SelectTrigger id="category" className="w-full">
                  <SelectValue placeholder="Categoria" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="food">Alimentação</SelectItem>
                  <SelectItem value="transport">Transporte</SelectItem>
                  <SelectItem value="housing">Moradia</SelectItem>
                  <SelectItem value="health">Saúde</SelectItem>
                  <SelectItem value="entertainment">Entretenimento</SelectItem>
                  <SelectItem value="shopping">Compras</SelectItem>
                  <SelectItem value="education">Educação</SelectItem>
                  <SelectItem value="subscriptions">Assinaturas</SelectItem>
                  <SelectItem value="utilities">Utilidades</SelectItem>
                  <SelectItem value="insurance">Seguro</SelectItem>
                  <SelectItem value="taxes">Impostos</SelectItem>
                  <SelectItem value="travel">Viagem</SelectItem>
                  <SelectItem value="groceries">Mercado</SelectItem>
                  <SelectItem value="gifts">Presentes</SelectItem>
                  <SelectItem value="investments">Investimentos</SelectItem>
                  <SelectItem value="savings">Poupança</SelectItem>
                  <SelectItem value="pets">Pets</SelectItem>
                  <SelectItem value="personal care">Cuidados Pessoais</SelectItem>
                  <SelectItem value="children">Crianças</SelectItem>
                  <SelectItem value="other">Outros</SelectItem>
                </SelectContent>
              </Select>
            )}
          />
          {errors.category && (
            <span className="text-red-500 text-sm">{errors.category.message}</span>
          )}
        </div>
      </div>
      <DialogFooter>
        <Button variant="outline" type="button" onClick={onBack} disabled={isSubmitting}>
          Voltar
        </Button>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Salvando..." : "Salvar despesa"}
        </Button>
      </DialogFooter>
    </form>
  );
}