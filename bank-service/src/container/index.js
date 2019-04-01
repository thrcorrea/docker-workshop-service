const { NODE_ENV } = require('../env');
const logger = require('../logger');
const knex = require('knex');
const knexFile = require('../../knexfile');

const BankModel = require('./models/BankModel');

const BankService = require('./services/BankService');


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
 * @property {BankModel} bankModel
 */

/** @type {ModelContainer} */
const models = {
  bankModel: new BankModel(database),
};

/**
 * @typedef ServiceContext
 * @type {ModelContainer}
 */

/** @type {ServiceContext} */
const serviceContext = {
  ...models,
};

/**
 * @typedef ServiceContainer
 * @type {Object}
 * @property {BankService} bankService
 */

/** @type {ServiceContainer} */
const services = {
  bankService: new BankService(serviceContext),
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

