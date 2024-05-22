import { NextFunction, Request, Response } from "express";

const globalErrorHandler = (
  error: { message: string },
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = 500;
  const message = error.message || "Something went wrong";
  res.status(statusCode).json({
    success: false,
    message,
    error,
  });
  next();
};

export default globalErrorHandler;

