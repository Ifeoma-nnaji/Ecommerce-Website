const { StatusCodes } = require('http-status-codes');

const sequelizeErrorMap = {
  SequelizeValidationError: (err) =>
    new AppError(
      'Validation error',
      StatusCodes.BAD_REQUEST,
      err.errors.map(e => ({ field: e.path, message: e.message }))
    ),

  SequelizeUniqueConstraintError: (err) =>
    new AppError(
      'Duplicate field value',
      StatusCodes.CONFLICT,
      err.errors.map(e => ({ field: e.path, message: e.message }))
    ),

  SequelizeForeignKeyConstraintError: () =>
    new AppError(
      'Invalid foreign key reference',
      StatusCodes.BAD_REQUEST
    )
};

function handleSequelizeError(err) {
  if (sequelizeErrorMap[err.name]) {
    return sequelizeErrorMap[err.name](err);
  }

  return new AppError(
    err.message || 'Database error',
    StatusCodes.INTERNAL_SERVER_ERROR
  );
}

module.exports = handleSequelizeError;