import { Router } from "express";
import { validatePassword } from "./controller";

const router = Router();

router.post("/check", (req, res) => {
  const { password } = req.body;

  res.json(validatePassword(password));
});

export default router;
