import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { CurrencyInput } from "../ui/currency";
import {
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from "../ui/dialog";
import type { Expense } from "../../types/expense";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { ChevronDownIcon } from "lucide-react";
import { Calendar } from "../ui/calendar";
import { useState } from "react";

interface ExpenseReviewProps {
  expense: Expense;
  onBack: () => void;
  onSave: () => void;
}

export function ExpenseReview({ expense, onBack, onSave }: ExpenseReviewProps) {
  const [openCalendar, setOpenCalendar] = useState(false)
  const [date, setDate] = useState<Date | undefined>(new Date(expense.date))
  const [amount, setAmount] = useState(expense.amount.toString());

  return (
    <div>
      <DialogHeader>
        <DialogTitle>Revisar despesa</DialogTitle>
        <DialogDescription>
          Verifique se as informações extraídas estão corretas antes de salvar.
        </DialogDescription>
      </DialogHeader>
      <div className="space-y-4 my-4">
        <div className="grid w-full max-w-sm items-center gap-2">
          <Label htmlFor="description">Descrição</Label>
          <Input id="description" value={expense.description} />
        </div>
        <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
          <div className="space-y-2">
            <Label htmlFor="amount">Valor</Label>
            <CurrencyInput
              value={amount}
              onChange={setAmount}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="date">Data</Label>
            <Popover open={openCalendar} onOpenChange={setOpenCalendar}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  id="date"
                  className="w-full justify-between font-normal h-9 border-input [&_svg]:text-muted-foreground [&_svg]:opacity-50"
                >
                  {date ? date.toLocaleDateString() : "Selecione uma data"}
                  <ChevronDownIcon />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto overflow-hidden p-0" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  captionLayout="dropdown"
                  onSelect={(date) => {
                    setDate(date)
                    setOpenCalendar(false)
                  }}
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>
        <div className="grid w-full max-w-sm items-center gap-2">
          <Label htmlFor="category">Categoria</Label>
          <Select defaultValue={expense.category}>
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