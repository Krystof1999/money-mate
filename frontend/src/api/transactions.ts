import type { Transaction } from "../types/Transaction";

const API_URL = import.meta.env.VITE_API_URL;

export async function fetchTransactions(): Promise<Transaction[]> {
  const res = await fetch(`${API_URL}/transactions`);

  if (!res.ok) {
    throw new Error("Failed to load transactions");
  }

  return res.json();
}
