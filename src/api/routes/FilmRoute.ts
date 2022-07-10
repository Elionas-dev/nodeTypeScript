import express, { Router, Request, Response, NextFunction } from 'express';
import * as controller from '../controllers/FilmController';
import { FilmCreateValidation, FilmUpdateValidation } from '../validations/FilmValidation';

const router = Router();

router.get('/', controller.getAll);

router.get('/:id', controller.getById);

router.post('/', FilmCreateValidation, controller.create);

router.put('/:id', FilmUpdateValidation, controller.updateById);

router.delete('/id', controller.deleteById);

export default router;