import jwt from "jsonwebtoken";
import { Request, Response } from "express";

const SECRET = "esto-es-secreto";

const getToken = (payload: Record<string, string>) => {
  const token = jwt.sign(payload, SECRET);
  return token;
};

export const login = async (req: Request, res: Response) => {
  if (!req.body.user || !req.body.password) {
    res.status(400).json({ msg: "invalid request" });
  }
  const payload = { user: req.body.user };
  const token = getToken(payload);
  res.status(200).json({ token });
};
