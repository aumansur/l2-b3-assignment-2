import express, { Request, Response } from "express";
const app = express();

app.use(express());

app.get("/", (req: Request, res: Response) => {
  res.send("hey  mansur your server is running 😎");
});

export default app;
