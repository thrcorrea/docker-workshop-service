CREATE DATABASE IF NOT EXISTS accountdb;

use accountdb;

CREATE TABLE `accounts` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `bankCode` varchar(3) NOT NULL,
  `balance` bigint(20) NOT NULL,
  `user` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;


INSERT INTO accountdb.accounts
(id, bankCode, balance, user)
VALUES(1, '033', 200000, 'Thaleco Teco');

INSERT INTO accountdb.accounts
(id, bankCode, balance, user)
VALUES(2, '001', 200, 'Tinoco Toco');
