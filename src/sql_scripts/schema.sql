CREATE DATABASE IF NOT EXISTS nutriverse;
USE nutriverse;

DROP TABLE IF EXISTS users;
CREATE TABLE IF NOT EXISTS users (
    id INTEGER NOT NULL AUTO_INCREMENT,
    username VARCHAR(20) NOT NULL UNIQUE,
    users_first_and_last_name VARCHAR(50),
    display_name VARCHAR(50) NULL,
    email VARCHAR(50) NOT NULL,
    users_password CHAR(16) NOT NULL,
    password_confirmation CHAR(16) NOT NULL,
    
    is_admin BOOLEAN NOT NULL DEFAULT FALSE,

    PRIMARY KEY (id),
    CHECK (LENGTH(username) > 0),
    CHECK (LENGTH(display_name) > 0)
);

DROP TABLE IF EXISTS dataset;
CREATE TABLE IF NOT EXISTS dataset (
	id INTEGER UNIQUE,  -- INTEGER NOT NULL UNIQUE
    age INTEGER NOT NULL,
    gender VARCHAR(10) NOT NULL,
    weight_kg FLOAT,
    weight_pounds FLOAT,
    height_cm FLOAT NOT NULL,
    height_feet FLOAT,
    activity_level VARCHAR(10) NOT NULL,
    pregnancy_status VARCHAR(15) DEFAULT NULL
);
