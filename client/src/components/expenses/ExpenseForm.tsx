import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { useForm, type SubmitHandler } from "react-hook-form";
import {
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from "../ui/dialog";
import type { ExpenseFormInputs } from "../../types/expense";

interface ExpenseFormProps {
  onSubmit: SubmitHandler<ExpenseFormInputs>;
}

export function ExpenseForm({ onSubmit }: ExpenseFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ExpenseFormInputs>();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <DialogHeader>
        <DialogTitle>Descreva sua despesa</DialogTitle>
        <DialogDescription>
          Conte em linguagem natural sobre sua despesa.
          A IA irá extrair automaticamente as informações e você poderá
          revisar antes de salvar.
        </DialogDescription>
      </DialogHeader>
      <div className="my-4">
        <Textarea
          {...register("naturalMessage", { required: true })}
          placeholder="Ex: Comprei um lanche no McDonald's por R$ 48,50 hoje de manhã"
          disabled={isSubmitting} />
        {errors.naturalMessage && <span className="text-red-500 text-sm">Este campo é obrigatório</span>}
      </div>
      <DialogFooter>
        <DialogClose asChild>
          <Button variant="outline" disabled={isSubmitting}>Cancelar</Button>
        </DialogClose>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting && <span className="text-sm">Processando...</span>}
          {!isSubmitting && <span>Processar com IA</span>}
        </Button>
      </DialogFooter>
    </form>
  );
}