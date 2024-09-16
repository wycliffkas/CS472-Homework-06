import { Router, Request, Response } from "express";

const router = Router();

interface User {
  id: number;
  name: string;
}

let users: User[] = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Smith" }
];

router.get("/", (req: Request, res: Response) => {
  res.json(users);
});

router.post("/", (req: Request, res: Response) => {
  const newUser = { id: users.length + 1, ...req.body };
  users.push(newUser);
  res.status(201).json(newUser);
});

export default router;
