class AccountService {
  /**
   * @param {import('../index').ServiceContext} container
   */

  constructor({ accountModel, banks }) {
    this.accountModel = accountModel
    this.banks = banks;
  }

  get(id) {
    return this.accountModel.get(id);
  }

  async getAll(query) {
    const accounts = await this.accountModel.getAll(query);
    const validatedAccounts = await Promise.all(accounts.map(async (account) => {
      const [bank] = await this.banks.getAll({ code: account.bankCode });
      return {
        ...account,
        bankName: bank.description,
      }
    }))
    return validatedAccounts;
  }
}

module.exports = AccountService
