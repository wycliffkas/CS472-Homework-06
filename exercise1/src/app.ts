import express, { Request, Response, NextFunction } from 'express';
import path from 'path';
import usersRouter from './routes/users';
import productsRouter from './routes/products';

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, './views/index.html'));
});

app.use('/users', usersRouter);
app.use('/products', productsRouter);

app.use((req: Request, res: Response) => {
  res.status(404).sendFile(path.join(__dirname, './views/404.html'));
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!', error: err.message });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
