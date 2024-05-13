import * as Joi from 'joi';

export const idSchema: Joi.ObjectSchema = Joi.object().keys({
  id: Joi.string().uuid().invalid(null)
    .required()
});
