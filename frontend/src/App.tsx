import { useEffect, useState } from "react";
import { fetchTransactions } from "./api/transactions";
import type { Transaction } from "./types/Transaction";

function App() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTransactions()
      .then(setTransactions)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <h1>Money Mate</h1>
      {loading && <p>Loading transactions…</p>}

      {!loading && (
        <ul>
          {transactions.map((t) => (
            <li key={t.id}>
              <strong>{t.date}</strong> — {t.description} —{" "}
              <strong>
                {t.amount} {t.currency}
              </strong>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
