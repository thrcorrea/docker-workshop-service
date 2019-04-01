const Model = require('./Model');

class BankModel extends Model {
  constructor(database) {
    super(database, 'banks');
  }

  /**
   * @param {Number} id
   * @return {import('./Model').ResultTransaction<BillPayment?>}
   */
  get(id) {
    return this.table.where('id', id).first();
  }
}

module.exports = BankModel;
