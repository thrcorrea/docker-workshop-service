CREATE DATABASE IF NOT EXISTS banking;

use banking;

CREATE TABLE `banks` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `code` varchar(3) NOT NULL,
  `description` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;


INSERT INTO banking.banks
(id, code, description)
VALUES(1, '033', 'Banco Santander (Brasil) S.A.');

INSERT INTO banking.banks
(id, code, description)
VALUES(2, '001', 'Banco do Brasil S.A.');
