
const { BadRequestError } = require('../errors/httpErrors');

const validateRequest = (schema) => (req, res, next) => {
  const result = schema.safeParse(req.body);

  if (!result.success) {

    const details = result.error.errors.map((err) => ({
      field: err.path.join('.'),
      message: err.message
    }));

    return next(new BadRequestError('Validation failed', details));
  }

  req.body = result.data; // validated data
  next();
};

module.exports = validateRequest;