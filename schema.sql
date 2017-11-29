create database CheapoMail;

use Cheapomail;

create table Users
(userID int auto_increment not null unique,
fname varchar(30) not null,
lname varchar(30) not null,
username varchar(30) not null,
password varbinary(64) not null,
primary key (userID)
);

create table Messages
(messageID int not null unique,
recipient_ids int,
sender_id int,
subject varchar(30),
body_ varchar(80),
date_sent date,
primary key (messageID)
);

create table Messages_read
(messagesReadID int not null unique,
messageID int not null,
reader_id int,
date_read date,
primary key (messagesReadID)

);

insert into Users (userID, fname, lname, username, password) values (111, 'John', 'McAadams', 'admin', 	MD5('password123'));

