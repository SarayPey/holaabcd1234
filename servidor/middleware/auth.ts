import { NextFunction, Request, Response } from "express";

const auth = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.token;

  if (!token) {
    res.status(400).json({ data: "No tienes permiso para pasar" });
    return;
  }
  next();
};

export default auth;
