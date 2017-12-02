DROP DATABASE IF EXISTS CheapoMail;
CREATE DATABASE CheapoMail;
USE CheapoMail;

CREATE TABLE Users
(
id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
firstname varchar(255),
lastname varchar(255),
username varchar(255),
password varchar(255)
);

INSERT INTO Users(id, firstname, lastname, username, password) VALUES
(1, 'Some', 'One', 'Legendary', '6437db2022d0b8c92fe6e87731d894cc');

CREATE TABLE Messages (
id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY, 
recipient_id INT UNSIGNED, 
user_id INT UNSIGNED,
subject varchar(255),
body text,
date_sent date
);

INSERT INTO Messages(id, recipient_id, user_id, subject, body, date_sent) VALUES
(1, 2, 1, 'Heylooo', 'Where art thou?',CURDATE());


CREATE TABLE Messages_read (
id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY, 
message_id int  NOT NULL, 
reader_id int NOT NULL,
date date
);

INSERT INTO Messages_read(id, message_id, reader_id, date) VALUES
(1, 1, 1, CURDATE());