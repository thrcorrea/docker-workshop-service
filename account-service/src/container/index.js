const { NODE_ENV } = require('../env');
const logger = require('../logger');
const knex = require('knex');
const knexFile = require('../../knexfile');

const AccountModel = require('./models/AccountModel');

const Banks = require('./integrations/Banks')

const AccountService = require('./services/AccountService');


const database = knex(knexFile);

if (NODE_ENV === 'development') {
  database.on('query', (query) => {
    let { sql } = query;
    if (query.bindings) {
      query.bindings.forEach((binding) => {
        sql = sql.replace('?', binding);
      });
    }
    logger.info(sql);
  });
}

/**
 * @typedef ModelContainer
 * @type {Object}
 * @property {AccountModel} accountModel
 */

/** @type {ModelContainer} */
const models = {
  accountModel: new AccountModel(database),
};

/**
 * @typedef IntegrationContainer
 * @property {Banks} banks
 */

/** @type {IntegrationContainer} */
const integrations = {
  banks: new Banks(),
};

/**
 * @typedef ServiceContext
 * @type {ModelContainer}
 */

/** @type {ServiceContext} */
const serviceContext = {
  ...models, ...integrations
};

/**
 * @typedef ServiceContainer
 * @type {Object}
 * @property {AccountService} accountService
 */

/** @type {ServiceContainer} */
const services = {
  accountService: new AccountService(serviceContext),
};

/**
 * @typedef Container
 * @type {ServiceContainer}
 */

/** @type {Container} */
const container = {
  ...services,
};

module.exports = container;

