import { Router } from "express";
import { mockTransactions } from "../data/mockTransactions";

const router = Router();

router.get("/", (_req, res) => {
  res.json(mockTransactions);
});

export default router;
