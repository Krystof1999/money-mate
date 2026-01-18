export type Transaction = {
  id: string;
  date: string;
  amount: number;
  currency: string;
  description: string;
  category?: string;
};
