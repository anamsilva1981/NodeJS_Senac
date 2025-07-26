
 

## PASSO A PASSO PARA RODAR A APLICAÇÃO NODE + MYSQL

1. Acessar o repositório do GitHub e baixar:

Link: https://github.com/alunosnodesenac/Aulas-Node
Clique em Code → Download ZIP, depois extraia os arquivos para uma pasta no seu computador.

2. Instalar as dependências do projeto:

Abra o terminal, navegue até a pasta onde estão os arquivos e digite:
npm install

3. Iniciar a aplicação:

Com as dependências instaladas, rode o comando:
npm run start

4. Subir o banco de dados no XAMPP:

Abra o XAMPP no seu PC
Ligue os serviços Apache e MySQL (ambos devem estar verdes)
Clique no botão ADMIN do MySQL
Vai abrir o phpMyAdmin no navegador
Clique em Novo
Na aba Banco de dados, digite o nome: testdb
Clique em Criar
Pronto! O banco testdb foi criado e vai aparecer na coluna da esquerda.

5. Criar as tabelas no banco:

Volte para o terminal e digite novamente:
npm run start
Agora, as tabelas e colunas serão criadas automaticamente.

6. Estrutura dos arquivos principais:

db.config → Configurações do banco de dados (host, usuário, senha, etc.)
tutorial.model.js → Define os campos da tabela e seus tipos
tutorial.controller.js → Onde ficam as ações (CRUD)
tutorial.routes.js → Define as rotas da API
server.js → Faz a ligação de tudo e configura o CORS (libera URLs permitidas)

7. Testar as rotas com o Postman:

Abra o Postman e siga os exemplos abaixo:
### GET - Buscar todos os tutoriais
GET http://localhost:8081/api/tutorials
Clique em Send → Retorna todos os dados cadastrados.

### POST - Criar um novo tutorial
POST http://localhost:8081/api/tutorials
No body (raw → JSON), insira:
{
  "title": "Meu primeiro tutorial",
  "description": "Descrição do tutorial"
}
Clique em Send → Cria o novo registro.

### GET BY ID - Buscar um tutorial pelo ID
GET http://localhost:8081/api/tutorials/1
(Substitua o número pelo ID desejado)


### DELETE - Deletar um tutorial
DELETE http://localhost:8081/api/tutorials/1
(Substitua o número pelo ID a ser removido)

### PUT - Atualizar um tutorial
PUT http://localhost:8081/api/tutorials/3
Corpo da requisição:
{
  "title": "almoçando no deeps",
  "description": "TEXTO ALTERADO COM SUCESSO"
}
(Substitua o ID e os dados conforme necessário)

### CHAMAR AS INFORMAÇÕES PUBLICADAS
GET http://localhost:8081/api/published
Clique em Send → Retorna todos os dados cadastrados e publicados .





