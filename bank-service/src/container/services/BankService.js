class BankService {
  /**
   * @param {import('../index').ServiceContext} container
   */

  constructor({ bankModel }) {
    this.bankModel = bankModel
  }

  get(id) {
    return this.bankModel.get(id);
  }
}

module.exports = BankService
