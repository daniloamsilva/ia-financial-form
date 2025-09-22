import type { ChangeEvent } from "react";

interface CurrencyInputProps {
  value: string;
  onChange: (value: string) => void;
  label?: string;
}

export function CurrencyInput({
  value,
  onChange,
}: CurrencyInputProps) {
  const formatCurrency = (val: string): string => {
    const number = Number(val) / 100;
    return number.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value.replace(/\D/g, "");
    onChange(rawValue);
  };

  return (
    <div className="flex flex-col">
      <div className="flex items-center border border-input rounded-md px-3 h-9 bg-background shadow-xs">
        <span className="text-muted-foreground mr-1 text-base md:text-sm">R$</span>
        <input
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          value={formatCurrency(value).replace("R$", "").trim()}
          onChange={handleChange}
          className="w-full outline-none text-left text-foreground ml-1 bg-transparent placeholder:text-muted-foreground text-base md:text-sm"
        />
      </div>
    </div>
  );
}
