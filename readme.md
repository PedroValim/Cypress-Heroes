# Cypress Heroes

Projeto de automação de testes end-to-end utilizando **Cypress**, criado com o objetivo de praticar e demonstrar conhecimentos em testes automatizados de aplicações web.

O foco do projeto é validar fluxos principais da aplicação, regras de negócio e permissões de usuários.

---

## Tecnologias utilizadas

- Cypress
- JavaScript
- Node.js
- Git

---

## Sobre os testes

Os testes cobrem os seguintes cenários:

- Login com usuário válido e inválido
- Listagem de heróis
- Criação de herói
- Edição de herói
- Exclusão de herói
- Validação de campos obrigatórios
- Validação de permissões de usuário

Usuários sem permissão administrativa não devem visualizar ações como criar, editar ou excluir heróis.

---

## Padrões adotados

- Uso de `data-cy` para seletores
- Testes organizados por funcionalidade
- Cenários claros e objetivos
- Validações funcionais e de permissão
- Separação de responsabilidades nos testes

Exemplo de validação de permissão:

```js
cy.get('[data-cy=create-hero]').should('not.exist')
cy.get('[data-cy=edit-hero]').should('not.exist')
cy.get('[data-cy=delete-hero]').should('not.exist')
```

Após clonar o repositório, acesse a pasta raiz do projeto e instale as dependências:

```sh
npm install
```
Em seguida, execute o setup inicial (configurações e dependências adicionais):
```sh
npm run setup
```
```sh
npm run dev
```

## Como executar os testes Cypress

Abrir o Cypress em modo interativo:
```sh
npx cypress open
```


## O projeto contempla testes para:

- Login
- Listagem de heróis
- Criação de herói
- Edição de herói
- Exclusão de herói
- Validação de permissões de usuário

## O repositório contém um arquivo com relatos de bugs, descrevendo:

- Descrição do problema
- Passos para reprodução
- Resultado esperado
- Resultado obtido
- Severidade e prioridade


# Autor
Pedro Valim

