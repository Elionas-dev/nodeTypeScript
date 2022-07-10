import express, {Express, NextFunction, request, Request, Response} from 'express';
import bodyParser from 'body-parser';
import { errors } from 'celebrate';
import 'express-async-erros';

import routes from './api/routes/index';
import sequelize from './database/sequelize';
import AppError from './utils/AppError';

const app: Express = express();
const port: number = 3333;

app.use(bodyParser.json());

app.use('/api/v1', routes);

app.get('/', (req: Request, res: Response) => {
    res.send('Hello world Express + TypeScript!!!');
});

app.use(errors());

app.use((err: AppError, req: Request, res: Response, next: NextFunction) =>{
    console.log(err);
    try {
        res.status(err.getHttpCode()).send(err.getError());
    } catch (error) {
        const appError = new AppError('InternalServerError', 'Erro interno do servidor', 500);
        res.status(500).send(appError.getError());
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

sequelize();