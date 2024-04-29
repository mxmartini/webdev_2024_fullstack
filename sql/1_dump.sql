USE main;

CREATE TABLE evento (
    id int not null primary key auto_increment,
    nome varchar(255) not null,
    data date,
    ativo boolean default false,
    criadoEm datetime not null default NOW(),
    atualizadoEm datetime
);

CREATE TABLE convidado (
    id int not null primary key auto_increment,
    nome varchar(255) not null,
    idade tinyint,
    endereco text,
    ativo boolean default false,
    eventoId int not null,
    criadoEm datetime not null default NOW(),
    atualizadoEm datetime,
    FOREIGN KEY (eventoId) REFERENCES evento (id)
);

INSERT INTO evento (nome, data) values ('Festa da Piscina', '2024-09-24'), ('Casamento', '2024-10-24'), ('Aniversário', '2024-11-24');
INSERT INTO convidado (nome, eventoId) values ('Max Martini', 1), ('Leonardo Hafner', 1), ('Camila Lins', 1), ('Sandro Macena', 1);
UPDATE evento SET ativo = true WHERE id in (1,2);
UPDATE convidado SET ativo = true WHERE id in (1,2,3);