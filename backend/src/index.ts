import express from "express";
import cors from "cors";
import transactionsRouter from "./routes/transactions";

const PORT = process.env.PORT || 4000;
const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173", // local FE
      "https://money-mate-frontend.netlify.app" // prod FE
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
  })
);

app.use(express.json());


app.get("/health", (_req, res) => {
  res.json({
    status: "status ok",
    version: "1.0.4",
    commit: process.env.RENDER_GIT_COMMIT ?? "local"
  });
});

app.use("/transactions", transactionsRouter);



app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
