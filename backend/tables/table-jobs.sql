USE `db-todentro`;
CREATE TABLE emprego(
id INT AUTO_INCREMENT NOT NULL,
cargo VARCHAR(30) NOT NULL,
descricao VARCHAR(255) NOT NULL,
salario DECIMAL(10,2) NOT NULL,

PRIMARY KEY (id));