# 📝 Blog Platform API | NestJS + JWT + Swagger

<p align="center">
  <a href="https://blog-pessoal-gh04.onrender.com/" target="_blank">
    <img src="https://img.shields.io/badge/🚀%20LIVE%20DEMO-Render-00C7B7?style=for-the-badge&logo=render&logoColor=white" alt="Live Demo" />
  </a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white" />
  <img src="https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white" />
  <img src="https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=swagger&logoColor=black" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=white" />
</p>

> 🎓 **Projeto Full-Stack Bootcamp Generation | Deploy em Produção**  
> API RESTful completa de blog com autenticação JWT, multi-ambiente (dev/prod) e documentação Swagger.

---

## 🌐 Deploy & Demo

* **🔗 API Base:** [https://blog-pessoal-gh04.onrender.com/](https://blog-pessoal-gh04.onrender.com/)  
* **📚 Swagger UI:** [https://blog-pessoal-gh04.onrender.com/swagger](https://blog-pessoal-gh04.onrender.com/swagger) *(Verifique a rota exata no seu `main.ts`)*

---

## 🔐 Funcionalidades de Autenticação

* **Registro de usuários:** Implementação de `bcrypt` para hashing de senhas.
* **Login JWT:** Autenticação *stateless* com emissão de token de acesso.
* **Proteção de rotas:** Uso de `@UseGuards` (AuthGuard) para controle de acesso.
* **Estratégias Múltiplas:** Implementação de `LocalStrategy` e `JwtStrategy` com Passport.js.

---

## 🏗️ Arquitetura do Projeto

```text
src/
├── auth/                    # Módulo de autenticação e segurança
│   ├── guards/              # JWT & Local guards
│   ├── strategy/            # Passport strategies
│   └── bcrypt/              # Hashing de senhas
├── configuration/           # Configuração multi-ambiente
│   ├── dev.service.ts       # Ambiente desenvolvimento (Local)
│   ├── prod.service.ts      # Ambiente produção (Render/Cloud)
│   └── swaggerconfig.ts     # Configuração do OpenAPI/Swagger
├── usuario/                 # Módulo de Gestão de Usuários
├── postagem/                # Módulo de Conteúdo (Postagens)
├── tema/                    # Módulo de Categorias (Temas)
└── data/services/           # Adaptadores de serviços por ambiente
```
---

## ⚡ Endpoints Principais

| Módulo | Autenticação | Endpoints |
|--------|-------------|-----------|
| **Auth** | Público | `POST /auth/login`, `POST /auth/register` |
| **Usuários** | JWT | CRUD completo |
| **Postagens** | JWT | CRUD + filtros por tema |
| **Temas** | JWT | CRUD categorias |

---


---

## 🛠️ Tecnologias Utilizadas

    Framework: NestJS

    Linguagem: TypeScript

    Autenticação: Passport.js + JWT

    ORM: TypeORM (PostgreSQL em produção)

    Documentação: Swagger/OpenAPI

    Deploy: Render

---

## ⚡ Endpoints da API

### 🔓 Públicos (Sem autenticação)
| Método | Endpoint | Descrição |
|--------|----------|-----------|
| POST | `/auth/login` | Login de usuário (retorna JWT) |
| POST | `/auth/register` | Cadastro de novo usuário |

### 🔒 Protegidos (Requer JWT)
| Módulo | Endpoints |
|--------|-----------|
| **Usuários** | `GET /usuarios`, `GET /usuarios/:id`, `PUT /usuarios`, `DELETE /usuarios/:id` |
| **Postagens** | `GET /postagens`, `POST /postagens`, `PUT /postagens`, `DELETE /postagens/:id` |
| **Temas** | `GET /temas`, `POST /temas`, `PUT /temas`, `DELETE /temas/:id` |

> 🔑 **Para testar endpoints protegidos:** Use o Swagger UI ou adicione o header `Authorization: Bearer SEU_TOKEN_JWT`

---

## 🚀 Como Executar Localmente

### Pré-requisitos
- Node.js instalado (v16+)
- Banco de dados PostgreSQL ou MySQL rodando
- Git configurado

### Passo a passo

```bash
# 1. Clone o repositório
git clone https://github.com/Duartetais/Blog_pessoal.git

# 2. Acesse a pasta
cd Blog_pessoal

# 3. Instale as dependências
npm install

# 4. Configure as variáveis de ambiente
# Crie um arquivo .env na raiz (veja .env.example se existir)
# ou configure diretamente em src/configuration/dev.service.ts

# 5. Execute em modo desenvolvimento
npm run start:dev

# 6. Acesse a API
# API: http://localhost:3000
# Swagger: http://localhost:3000/api
```
---

## 🤝 Conecte-se Comigo

Desenvolvedora de Software em constante aprendizado, focada em construir soluções seguras e eficientes. Sinta-se à vontade para entrar em contato para trocarmos experiências!

<div align="left">
  <a href="https://linkedin.com/in/Duartetais" target="_blank">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn">
  </a>
  
  <a href="https://github.com/Duartetais" target="_blank">
    <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="GitHub">
  </a>
  
  <a href="mailto:seu-email@exemplo.com" target="_blank">
    <img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Email">
  </a>
</div>

---
<p align="center">Feito por Tais Duarte Bernardi</p>
