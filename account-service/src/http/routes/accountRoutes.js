const express = require('express');
const AccountController = require('../controllers/AccountController');
const container = require('../../container');

const accountController = new AccountController(container);

const router = express.Router({ mergeParams: true });

router.get(
  '/',
  accountController.getAll.bind(accountController),
)

router.get(
  '/:id',
  accountController.get.bind(accountController),
);



module.exports = router;
