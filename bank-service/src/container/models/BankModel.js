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

  /**
   * @param {String} code
   * @return {import('./Model').ResultTransaction<BillPayment?>}
   */
  getAll({ code }) {
    const query = this.table;

    if (code) {
      query.where('code', code);
    }

    return query;
  }
}

module.exports = BankModel;
