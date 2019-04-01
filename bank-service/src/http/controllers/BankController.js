const { ResourceNotFoundError } = require('../../errors');

class BankController {
  /**
   * @param {import('../../container').Container} container
   */
  constructor(container) {
    this.bankService = container.bankService;
  }


  /**
   * Retorna banco por id
   *
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   * @param {import('express').NextFunction} next
   */
  async get(req, res, next) {
    try {
      const { id } = req.params;

      const bank = await this.bankService.get(id);
      if (!bank) {
        throw new ResourceNotFoundError(req.__('error.resourceNotFound'));
      }

      res.send(bank);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = BankController;
