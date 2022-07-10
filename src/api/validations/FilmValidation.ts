import { celebrate, Joi, Segments } from "celebrate";

export const FilmCreateValidation = celebrate({
  [Segments.BODY]: Joi.object().keys({
    title: Joi.string().required(),
    description: Joi.string().required(),
    release_year: Joi.number().required(),
    language_id: Joi.number().required(),
    rental_duration: Joi.number().required(),
    rental_rate: Joi.string().required(),
    length: Joi.number().required(),
    replacement_cost: Joi.string().required(),
    rating: Joi.string().required(),
    last_update: Joi.string().required(),
    special_features: Joi.array().items(Joi.string()).required(),
    fulltext: Joi.string().required(),
  }),
});

export const FilmUpdateValidation = celebrate({
  [Segments.BODY]: Joi.object()
    .keys({
      title: Joi.string(),
      description: Joi.string(),
      release_year: Joi.number(),
      language_id: Joi.number(),
      rental_duration: Joi.number(),
      rental_rate: Joi.string(),
      length: Joi.number(),
      replacement_cost: Joi.string(),
      rating: Joi.string(),
      last_update: Joi.string(),
      special_features: Joi.array().items(Joi.string()),
      fulltext: Joi.string(),
    })
    .min(1),
});