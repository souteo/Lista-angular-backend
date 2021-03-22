CREATE DATABASE eal_tasks;

USE eal_tasks;

CREATE TABLE tasks(
    tasks_id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    tasks_text VARCHAR(300),
    tasks_status TINYINT(1)
);

DESCRIBE tasks;