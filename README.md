# 🛍️ Cadastro e Listagem de Produtos

Este é um projeto de aplicação web para cadastro e listagem de produtos. A aplicação permite que o usuário adicione novos produtos e visualize a lista dos produtos cadastrados, com a funcionalidade de persistência de dados, o que facilita a integração com bancos de dados relacionais.

![image](https://github.com/user-attachments/assets/47d15d0a-995d-4a6b-8d37-38b7e8b91277)

![image](https://github.com/user-attachments/assets/99fd2006-75b2-48e9-b981-ac45a8c0ed7e)



## 🚀 Tecnologias Utilizadas

- **JavaScript**: Linguagem principal para a lógica do lado do cliente e servidor.
- **Node.js**: Plataforma usada para execução do JavaScript no servidor.
- **Express**: Framework para Node.js, utilizado para construir a aplicação de forma rápida e eficiente.
- **EJS**: Motor de templates para renderizar o HTML de forma dinâmica.

## 📋 Funcionalidades

### Cadastro de Produto
- Formulário com os seguintes campos:
  - **Nome do produto**: Campo de texto.
  - **Descrição do produto**: Campo de texto.
  - **Valor do produto**: Campo numérico para o valor.
  - **Disponível para venda**: Campo com opções "Sim" ou "Não".

### Listagem de Produtos
- Colunas exibidas: **Nome** e **Valor**.
- Ordenação automática dos produtos por **valor** do menor para o maior.
- Após cadastrar um produto, o usuário é redirecionado automaticamente para a listagem.
- Botão para cadastrar um novo produto diretamente da tela de listagem.

## 🛠️ Como Usar

1. Clone este repositório:
   ```bash
   git clone https://github.com/usuario/nome-do-repositorio.git
