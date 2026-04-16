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

# 🖋️ Blog Pessoal

<p align="center">
<img src="https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white" />
<img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
<img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white" />
<img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=json-web-tokens&logoColor=white" />
<img src="https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=swagger&logoColor=black" />
</p>

    Status do Projeto: 🚀 Finalizado / Em Deploy

O Blogpessoal é uma API desenvolvida para gerenciar postagens de um blog, com suporte a temas e autenticação de usuários. Este projeto foi construído durante o Bootcamp da Generation Brasil, aplicando as melhores práticas de desenvolvimento back-end.

🛠️ Tecnologias e Ferramentas
Ícone	Tecnologia	Descrição
🦁	NestJS	Framework Node.js progressivo para aplicações escaláveis.
📘	TypeScript	Superset do JavaScript com tipagem estática.
🗄️	TypeORM	ORM para mapeamento objeto-relacional.
🐬	MySQL	Banco de dados relacional para persistência de dados.
🔐	Bcrypt	Criptografia de senhas para maior segurança.
📑	Swagger	Interface interativa para documentação da API.
📁 Estrutura de Pastas
Bash

src/
 ├── 🔑 auth/         # Autenticação e Guards
 ├── 📝 postagem/     # Crud de Postagens
 ├── 🎨 tema/         # Categorias de Temas
 ├── 👤 usuario/      # Gestão de Usuários
 └── ⚙️ main.ts       # Inicialização da API

⚙️ Funcionalidades

    👤 Usuários: Cadastro, Login e listagem.

    📝 Postagens: CRUD completo com proteção de rotas.

    📂 Temas: Organização de conteúdo por categoria.

    🛡️ Segurança: Apenas usuários logados podem criar ou editar conteúdos.

    📖 Documentação: Testes em tempo real via Swagger.

🚀 Como Executar o Projeto

    Clone o repositório
    Bash

    git clone https://github.com/SEU_USUARIO/Blog_pessoal.git

    Instale as dependências
    Bash

    npm install

    Configure o arquivo .env
    Snippet de código

    DB_HOST=localhost
    DB_PORT=3306
    DB_USERNAME=root
    DB_PASSWORD=sua_senha
    DB_DATABASE=db_blogpessoal

    Inicie o servidor
    Bash

    npm run start:dev

🔗 Endpoints Principais
👤 Usuários

    POST /usuarios/cadastrar - Novo usuário

    POST /usuarios/logar - Login (Gera Token 🔑)

📝 Postagens

    GET /postagens - Listar todas

    POST /postagens - Criar (Requer Token)

<p align="center">
<b>Desenvolvido com ❤️ por Tais Bernardi</b>

<a href="https://www.linkedin.com/in/SEU_LINKEDIN">
<img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" />
</a>
</p>
---
**Desenvolvido por Tais Bernardi 👩‍💻**