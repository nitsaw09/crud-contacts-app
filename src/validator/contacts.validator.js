const Joi = require('joi');
const _ = require('lodash');

const schemas = {
  contacts: Joi.object().keys({
    firstName: Joi.string().label('firstName').required(),
    lastName: Joi.string().label('lastName').required(),
    email: Joi.string().email().label('email').required(),
    notes: Joi.string().label('notes').required()
  })
};

const options = {

  basic: {
    abortEarly: false,
    convert: true,
    allowUnknown: false,
    stripUnknown: true
  },

  array: {
    abortEarly: false,
    convert: true,
    allowUnknown: true,
    stripUnknown: {
      objects: true
    }
  }
};

module.exports = {
                                                                                              
    contacts: (req, res, next) =>
    {

    let schema = schemas.contacts;
    let option = options.basic;


    var { error, value } = schema.validate(req.body, option);
    if(!_.isEmpty(value)){
      next()
    }
    if(!_.isEmpty(error)){
      const message = error.details.reduce((prev, curr) => {
        prev[curr.path[0]] = curr.message.replace(/"/g, '');
        return prev;
      }, {});
      return res.status(401).json({ error: true, message });  
    }
  },
}