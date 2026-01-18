import { Transaction } from '../domain/transaction';

export const mockTransactions: Transaction[] = [
  {
    id: "1",
    date: "2025-01-01",
    amount: -253.5,
    currency: "CZK",
    description: "Groceries – Lidl",
    category: "Food"
  },
  {
    id: "2",
    date: "2025-01-03",
    amount: 35000,
    currency: "CZK",
    description: "Salary",
    category: "Income"
  }
];
