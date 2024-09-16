import { Router, Request, Response } from "express";

const router = Router();

interface Product {
  id: number;
  name: string;
  price: number;
}

const products: Product[] = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Phone", price: 500 }
];

router.get("/", (req: Request, res: Response) => {
  res.json(products);
});

router.post("/", (req: Request, res: Response) => {
  const newProduct = { id: products.length + 1, ...req.body };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

export default router;
