import express, {Express, Request, Response} from 'express';
import bodyParser from 'body-parser';
import routes from './app/routes/index';

import sequelize from './database/sequelize';

const app: Express = express();
const port: number = 3333;

app.use(bodyParser.json());

app.use('/api/v1', routes);

app.get('/', (req: Request, res: Response) => {
    res.send('Hello world Express + TypeScript!!!');
});

app.listen(3333, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

sequelize();                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              