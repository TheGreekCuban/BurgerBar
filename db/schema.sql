DROP DATABASE IF EXISTS kb01nlr42hkglc59;
CREATE DATABASE kb01nlr42hkglc59;
USE kb01nlr42hkglc59;

DROP TABLE IF EXISTS burgers;

CREATE TABLE burgers (
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(355) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);