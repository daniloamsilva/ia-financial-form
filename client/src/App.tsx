import { WandSparkles } from "lucide-react"
import { Button } from "./components/ui/button";
import { Textarea } from "./components/ui/textarea";
import { useForm, type SubmitHandler } from "react-hook-form";
import { Table, TableBody, TableCell, TableRow } from "./components/ui/table"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "./components/ui/dialog";

type Inputs = {
  naturalMessage: string,
}

function App() {
  const data = [
    { description: "BigMac", amount: 250.0, date: "2023-10-01", category: "food" },
    { description: "Passagem de onibus", amount: 150.0, date: "2023-10-02", category: "transport" },
    { description: "Conta de Luz", amount: 300.0, date: "2023-10-03", category: "utilities" },
    { description: "Cinema", amount: 400.0, date: "2023-10-04", category: "entertainment" },
  ];

  const totalAmount = data.reduce((sum, item) => sum + item.amount, 0);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log(data);
  };

  return (
    <div className="min-h-svh">
      <div className="min-h-svh max-w-xl mx-auto flex flex-col">
        <div>
          <div className="flex justify-between items-center my-5">
            <h1 className="text-2xl font-bold">Lançamentos</h1>
            <Dialog>
              <DialogTrigger asChild>
                <Button type="button" size="icon">
                  <WandSparkles />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
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
              </DialogContent>
            </Dialog>
          </div>
          <Table>
            <TableBody>
              {data.map((item, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{item.description}</TableCell>
                  <TableCell>{item.date}</TableCell>
                  <TableCell>{item.category}</TableCell>
                  <TableCell className="text-right">R$ {item.amount.toFixed(2)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="mt-4 flex justify-between items-center border-t p-3">
          <h2 className="text-xl font-bold">Total das despesas</h2>
          <span>R$ {totalAmount.toFixed(2)}</span>
        </div>
      </div>
    </div >
  )
}

export default App