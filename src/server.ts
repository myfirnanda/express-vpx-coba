import express, { Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

const PORT : number = Number(process.env.PORT);

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
});

app.get('/hello', (req: Request, res: Response) => {
    res.send('Hello from /hello route!');
});

app.get("/:name", (req: Request, res: Response) => {
    const name = req.params.name;
    res.send(`Hello, ${name}!`);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});