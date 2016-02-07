/*DROP DATABASE IF EXISTS chat;*/

CREATE DATABASE chat;

USE chat;

CREATE TABLE `Messages` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL PRIMARY KEY,
  `username` VARCHAR(20) NOT NULL,
  `message` VARCHAR(140) NOT NULL,
  `roomname` VARCHAR(20) NOT NULL DEFAULT 'lobby',
  `createdAt` TIMESTAMP NULL DEFAULT NULL
);

/* Create other tables and define schemas for them here! */
CREATE TABLE `Users` (
  `id` INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `username` VARCHAR(20) NOT NULL,
  `password` VARCHAR(15) NULL DEFAULT NULL
);

/*ALTER TABLE `Messages` ADD FOREIGN KEY (userid) REFERENCES `Users` (`id`);*/

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

