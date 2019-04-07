const express = require('express');
const BankController = require('../controllers/BankController');
const container = require('../../container');

const bankController = new BankController(container);

const router = express.Router({ mergeParams: true });

router.get(
  '/',
  bankController.getAll.bind(bankController),
)

router.get(
  '/:id',
  bankController.get.bind(bankController),
);



module.exports = router;
