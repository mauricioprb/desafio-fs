
# E-commerce com NodeJS, Prisma, MySQL e ReactJS

Este projeto é um E-commerce desenvolvido com a stack de tecnologias: NodeJS no backend, Prisma como ORM, MySQL como banco de dados e ReactJS para o frontend.




## Resultado
#### Tela de produtos
![Tela principal](https://i.ibb.co/8rLn8dg/image.png)

#### Tela do carrinho
![Tela principal](https://i.ibb.co/2Pfn9z1/image-1.png)


## Stack utilizada

**Frontend:** Figma , ReactJS

**Backend:** Node, Express, MySQL, Prisma


## Funcionalidades

- Adicionar produtos ao carrinho
- Escolher quantidade do produto
- Remover produtos do carrinho


## Iniciando projeto backend localmente

Clone o projeto

```bash
  git clone https://github.com/mauricioprb/desafio-fs
```

Entre no diretório do projeto

```bash
  cd backend
```

Instale as dependências e configure o .env

```bash
  npm install
```
Criar migrations do banco de dados com o Prisma

```bash
  npx prisma migrate dev
```

Adicionar os produtos no banco

```bash
  node inserirProdutos.js
```

Entre no diretório do server.js

```bash
  cd src/server
```

Iniciar projeto backend

```bash
  node server.js
```

## Iniciando projeto frontend localmente

Após ter seguido os passos de inicialização do backend seguimos para o frontend

Instale as dependências

```bash
  npm install
```

Iniciar projeto frontend

```bash
  npm run dev
```
