const {
  NotFoundError,
  ResourceNotFoundError,
  ValidationError,
} = require('../../errors');

const logger = require('../../logger');

module.exports = (err, req, res, next) => {

  if (err instanceof NotFoundError || err instanceof ResourceNotFoundError) {
    res.status(404).send(err);
    return;
  }

  if (
    err instanceof ValidationError
  ) {
    res.status(400).send(err);
    return;
  }

  if (err.code === 'ER_DUP_ENTRY') {
    res
      .status(409)
      .send({ code: 'DUPLICATED_RESOURCE', message: res.__('error.duplicatedResource') });
  } else {
    res.status(500).send({ code: 'UNEXPECTED_ERROR', message: res.__('error.unexpected') });
  }

  logger.error(err);

  next();
};
