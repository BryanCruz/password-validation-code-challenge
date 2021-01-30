import { Router } from "express";

const router = Router();

router.post("/check", (req, res) => {
  const { password } = req.body;

  res.json({
    valid: false,
  });
});

export default router;
