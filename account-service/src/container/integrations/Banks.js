const HttpIntegration = require('./HttpIntegration');
const { AGREEMENT_URL } = require('../../env');

class Banks extends HttpIntegration {

  constructor() {
    console.log('URL AGREEMENT', AGREEMENT_URL);
    super({
      baseURL: AGREEMENT_URL,
      timeout: 60000,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
  }

  async get(id) {
    try {
      const response = await this.instance.get(`/banks/${id}`);
      return response.data;
    } catch (err) {
      if (err.response && err.response === 404) {
        return null;
      }
      throw err;
    }
  }

  async getAll(query) {
    try {
      this.instance.op
      const response = await this.instance.get(`/banks`, { params: query });
      return response.data;
    } catch (err) {
      if (err.response && err.response === 404) {
        return null;
      }
      throw err;
    }
  }

}

module.exports = Banks;
