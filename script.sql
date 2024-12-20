create database db_elethronos;

use db_elethronos;


create table tb_cliente (
    id_cliente  int primary key auto_increment,
    nome        varchar(150),
    telefone    varchar(20),
    cep         varchar(10),
    bairro      varchar (150),
    logradouro  varchar(150),
    nr_casa     varchar(10)
);

create table tb_visita (
    id_visita   int PRIMARY KEY AUTO_INCREMENT,
    dt_visita   DATETIME,
    ds_status   VARCHAR(100) DEFAULT "confirmado",

    id_cliente  int,
    Foreign Key (id_cliente) REFERENCES tb_cliente(id_cliente) on delete cascade
);

create table tb_orcamento (
    id_orcamento    INT PRIMARY KEY AUTO_INCREMENT,
    ds_status       VARCHAR(100) DEFAULT "pendente",
    ds_orcamento    VARCHAR(250),
    dt_criado       DATETIME DEFAULT CURRENT_TIMESTAMP,
    vl_orcamento    DECIMAL(10, 2),

    id_visita       INT,
    Foreign Key (id_visita) REFERENCES tb_visita(id_visita)  on delete cascade
);

create table tb_autonomo (
    id_autonomo     INT PRIMARY KEY AUTO_INCREMENT,
    email           VARCHAR(100),
    senha           VARCHAR(100)
);

insert into tb_autonomo (email, senha) values ('bruno@gmail.com', '123');

create table tb_servico(
    id_servico int primary key auto_increment,

    nm_servico varchar(150),
    vl_servico decimal(15,2)
);

create table tb_servicos_orcamento (
    id_servicos_orcamento   int primary key auto_increment,
    id_orcamento            INT,
    id_servico              INT,

    Foreign Key (id_orcamento) REFERENCES tb_orcamento(id_orcamento)  on delete cascade,
    Foreign Key (id_servico) REFERENCES tb_servico(id_servico)  on delete cascade
);  


create table tb_feedback(
	id_feedback int primary key auto_increment,
    id_autonomo int,
	ds_conteudo text,
    dt_feedback  datetime default current_timestamp, 
    
    foreign key (id_autonomo) references tb_autonomo (id_autonomo) on delete cascade
);

create table tb_resposta(
	id_resposta int primary key auto_increment,
    id_feedback int,
    ds_conteudo text,
    data_resposta datetime default current_timestamp,

	foreign key (id_feedback) references tb_feedback (id_feedback) on delete cascade
);
