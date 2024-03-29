import { twMerge } from "tailwind-merge";
import { clsx, type ClassValue } from "clsx";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export function formatDate(dateString: string) {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Month is 0-indexed
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
}
