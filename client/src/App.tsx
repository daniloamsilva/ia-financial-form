import { Table, TableBody, TableCell, TableRow } from "./components/ui/table"

function App() {
  const data = [
    { description: "BigMac", amount: 250.0, date: "2023-10-01", category: "food" },
    { description: "Passagem de onibus", amount: 150.0, date: "2023-10-02", category: "transport" },
    { description: "Conta de Luz", amount: 300.0, date: "2023-10-03", category: "utilities" },
    { description: "Cinema", amount: 400.0, date: "2023-10-04", category: "entertainment" },
  ];

  const totalAmount = data.reduce((sum, item) => sum + item.amount, 0);

  return (
    <div className="min-h-svh">
      <div className="min-h-svh max-w-xl mx-auto flex flex-col">
        <div>
          <h1 className="text-2xl font-bold m-3">Lançamentos</h1>
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
          <h2 className="text-xl font-bold m-3">Total das despesas</h2>
          <span>R$ {totalAmount.toFixed(2)}</span>
        </div>
      </div>
    </div>
  )
}

export default App