const { ResourceNotFoundError } = require('../../errors');

class AccountController {
  /**
   * @param {import('../../container').Container} container
   */
  constructor(container) {
    this.accountService = container.accountService;
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

      const account = await this.accountService.get(id);
      if (!account) {
        throw new ResourceNotFoundError(req.__('error.resourceNotFound'));
      }

      res.send(account);
    } catch (err) {
      next(err);
    }
  }

  async getAll(req, res, next) {
    try {
      const query = req.query;

      const accounts = await this.accountService.getAll(query);

      res.send(accounts);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = AccountController;
