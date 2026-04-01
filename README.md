<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

<p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
</p>

---

# 🖋️ InkFlow - Blog Pessoal

O **InkFlow** é uma API robusta construída com **NestJS**, desenvolvida para o gerenciamento de postagens de um blog. Este projeto foca na implementação de um CRUD completo, integrando validações e persistência de dados.

## 🚀 Tecnologias
* **NestJS**: Framework Node.js progressivo para aplicações escaláveis.
* **TypeORM**: ORM para gerenciar o banco de dados.
* **MySQL**: Banco de dados relacional.
* **TypeScript**: Linguagem com tipagem estática.

## 🛠️ Endpoints Implementados

| Método | Endpoint | Descrição |
| :--- | :--- | :--- |
| **GET** | `/postagens` | Lista todas as postagens. |
| **GET** | `/postagens/:id` | Busca por ID. |
| **GET** | `/postagens/titulo/:titulo` | Busca por Título (ILike). |
| **POST** | `/postagens` | Cadastra nova postagem. |
| **PUT** | `/postagens` | Atualiza postagem. |
| **DELETE** | `/postagens/:id` | Deleta postagem. |

---

## 🏁 Como Executar
1. `npm install`
2. `npm run start:dev`

---
**Desenvolvido por Tais Bernardi 👩‍💻**