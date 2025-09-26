import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, "0");
  const month = date.toLocaleDateString("pt-BR", { month: "short" });
  const year = date.getFullYear();

  const formattedMonth =
    month.replace(".", "").charAt(0).toUpperCase() +
    month.replace(".", "").slice(1);

  return `${day} ${formattedMonth} ${year}`;
}
