import express, { Application, NextFunction, Request, Response, Router } from 'express';
import { nextTick } from 'process';
import * as controller from '../controllers/Filmcontroller';

const router: Application = express();

router.get('/', async (req:Request, res: Response ) => {
    res.send(await controller.getAll());
});

router.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
        res.send(await controller.getById(parseInt(req.params.id)));
    } catch (error) {
        next(error);
    }
});

router.post('/', async (req: Request, res: Response) => {
    res.status(201).send(await controller.create(req.body));
});

router.put('/:id', async (req: Request, res: Response) => {
    res.send(await controller.updateById(parseInt(req.params.id), req.body));
});

router.delete('/:id', async (req: Request, res: Response) => {
    await controller.deleteById(parseInt(req.params.id));
    res.status(204).send();
});

export default router;