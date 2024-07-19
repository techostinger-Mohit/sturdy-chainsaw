import express, { Request, Response, NextFunction, Router } from "express";

export function signupController(req: Request, res: Response): void {
  res.send("Signup Route");
}
