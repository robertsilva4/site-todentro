ALTER TABLE emprego 
ADD CONSTRAINT fk_emprego_empresa 
FOREIGN KEY(id_empresa) REFERENCES empresa(id);