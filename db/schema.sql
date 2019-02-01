CREATE DABTABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
ID INT(10) NOT NULL AUTO INCREMENT,
burger_name VARCHAR(10),
devoured TINYINT (1),
PRIMARY KEY (ID)
);