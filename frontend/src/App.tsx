import { useEffect, useState } from "react";

function App() {
  const [health, setHealth] = useState<any>(null);

  useEffect(() => {
    fetch("https://money-mate-0oqp.onrender.com/health")
      // fetch("http://localhost:4000/health")
      .then((res) => res.json())
      .then((data) => setHealth(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>Money Mate</h1>

      {health ? (
        <pre>{JSON.stringify(health, null, 2)}</pre>
      ) : (
        <p>Loading backend status…</p>
      )}
    </div>
  );
}

export default App;
