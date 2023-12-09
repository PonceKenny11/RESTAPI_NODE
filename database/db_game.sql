CREATE DATABASE db_games;

USE db_games;

CREATE TABLE games(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    Titulo varchar(100),
    Descripcion varchar(255),
    Imagen varchar(255),
    Fecha timestamp default CURRENT_TIMESTAMP
);

