# City User Project

Projeto que consiste em pesquisar a cidade das pessoas em si. Sendo uma API REST com Express para criação de enpoints e Knex.js para conexão com o banco de dados, sendo utilizado o TypeScript para tipagens.

## Inicializando o projeto

Primeiro de tudo é necessário instalar os pacotes Node.js.

```shell
yarn ou npm install
```

Caso seja a primeira vez executando, é necessário fazer o build do TS pelo menos 1 vez.

```shell
yarn build ou npm run build
```

Então caso queira executar no âmbito desenvolvimento, utilize:

```shell
yarn dev:watch ou npm run dev:watch
```

Caso queira executar, tendo feito o build anteriormente, é preciso executar:

```shell
yarn start ou npm run start
```

Outro ponto importante é sobre a questão do banco de dados, o que pode gerar é erro é o banco estar vazio, existem comando para fazer reset no banco.

```shell
yarn db:reset ou npm run db:reset
```

## Tests

Para executar os testes basta executar o seguinte comando

```shell
yarn test ou npm run test
```

## Endpoints

### Insomnia

Caso tenha o programa instalado, existe um arquivo no projeto chamado `Insomnia-Requests-API.json`, é só importar no Insomnia no qual irá mostrar todos os requests da API.

### Saúde

- Método: GET
- URL: api/v1/health
- Resposta: JSON => { status: string }

### Registro de cidade

- Método: POST
- URL: api/v1/city
- Corpo da requisição: JSON => { name: string, state: string }
- Resposta:
  - Sucesso:
    - Status: 201
    - Mensagem: JSON => { cityId: int }
  - Erro:
    - Status: 403
    - Mensagem: JSON => { erro: string }

### Otenção de cidade

- Método: GET
- URL: api/v1/city
- Possiveis querries:
  - city:
    - Tipo: string ou undefined
    - Uso: Para buscar cidades que começam com a string inserida
  - state:
    - Tipo: string ou undefined
    - Uso: Para buscar cidades de que começam com o estado da string inserida
- Resposta:
  - Sucesso:
    - Status: 200
    - Mensagem: arr[JSON] => { id: int, name: string, state: string }
  - Erro:
    - Status: 403
    - Mensagem: JSON => { erro: string }

### Registro de Usuário

- Método: POST
- URL: api/v1/user
- Corpo da requisição: JSON => { name: string, gender: string, birthdate: string, age: number, cityName: string, cityState: string }
- Resposta:
  - Sucesso:
    - Status: 201
    - Mensagem: JSON => { id: int, name: string, gender: string, birthdate: Date, age: number, cityName: string, cityState: string, uuid: string }
  - Erro:
    - Status: 403
    - Mensagem: JSON => { erro: string }

### Obtençãos de Usuários

- Método: GET
- URL: api/v1/user
- Possiveis querries:
  - name:
    - Tipo: string ou undefined
    - Uso: Para buscar usuários que começam com a string inserida
  - citystate:
    - Tipo: string ou undefined
    - Uso: Para buscar estado de cidade que começa com a string inserida
  - cityname:
    - Tipo: string ou undefined
    - Uso: Para buscar nome de cidade que começa com a string inserida
  - citystate:
    - Tipo: string ou undefined
    - Uso: Para buscar estado de cidade que começa com a string inserida
- Resposta:
  - Sucesso:
    - Status: 200
    - Mensagem: arr[JSON] => { id: int, name: string, gender: string, birthdate: Date, age: number, cityName: string, cityState: string, uuid: string }
  - Erro:
    - Status: 403
    - Mensagem: JSON => { erro: string }

### Obtençãos de Usuário

- Método: GET
- URL: api/v1/user/:id
- Parametro:
  - id: int
- Resposta:
  - Sucesso:
    - Status: 200
    - Mensagem: JSON => { id: int, name: string, gender: string, birthdate: Date, age: number, cityName: string, cityState: string, uuid: string }
  - Erro:
    - Status: 403
    - Mensagem: JSON => { erro: string }

### Atualiazar nome do Usuário

- Método: PUT
- URL: api/v1/user/:id
- Parametro:
  - id: int
- Corpo da requisição: JSON => { name: string }
- Resposta:
  - Sucesso:
    - Status: 200
    - Mensagem: JSON => { id: int, name: string, gender: string, birthdate: Date, age: number, cityName: string, cityState: string, uuid: string }
  - Erro:
    - Status: 403
    - Mensagem: JSON => { erro: string }

### Deletar Usuário

- Método: DELETE
- URL: api/v1/user/:id
- Parametro:
  - id: int
- Resposta:
  - Sucesso:
    - Status: 200
    - Mensagem: JSON => { message: string, id: int }
  - Erro:
    - Status: 403
    - Mensagem: JSON => { erro: string }

## Banco de dados

Foi utilizado o SQLite para fazer o CRUD dos dados em si. Existindo 2 tabelas: USERS e CITY.

### CITY

| Campo      | Tipo     | Chave | Limite | Relacionamento | Outros                             | Descrição                                          |
| ---------- | -------- | ----- | ------ | -------------- | ---------------------------------- | -------------------------------------------------- |
| id         | int      | PK    |        |                | Incremental                        | Chave primária da cidade, sendo incremental        |
| name       | varchar  |       | 60     |                | NOT NULL                           | Nome da cidade                                     |
| state      | varchar  |       | 2      |                | NOT NULL                           | Abreviação do estado da cidade                     |
| created_at | datetime |       |        |                | Default Timestamp momento registro | Timestamp do momento que o registro foi criado     |
| updated_at | datetime |       |        |                | Default Timestamp momento registro | Timestamp do momento que o registro foi atualizado |

### USERS

| Campo      | Tipo     | Chave | Limite | Relacionamento | Outros                             | Descrição                                                           |
| ---------- | -------- | ----- | ------ | -------------- | ---------------------------------- | ------------------------------------------------------------------- |
| id         | int      | PK    |        |                | Incremental                        | Chave primária do usuário, sendo incremental                        |
| fullname   | varchar  |       | 40     |                | NOT NULL                           | Nome completo do usuário                                            |
| gender     | varchar  |       | 1      |                | NOT NULL                           | Gênero do usuário                                                   |
| birthdate  | datetime |       |        |                | NOT NULL                           | Dia do nascimento do usuário                                        |
| age        | int      |       |        |                | NOT NULL                           | Idade do usuário                                                    |
| uuid       | varchar  |       | 255    |                | NOT NULL                           | ID universal único, utlizado para retorno do usuário na inserção    |
| id_city    | int      | FK    |        | CITY(id)       | NOT NULL                           | Chave estrangeira para fazer relacionamento com a cidade do usuário |
| created_at | datetime |       |        |                | Default Timestamp momento registro | Timestamp do momento que o registro foi criado                      |
| updated_at | datetime |       |        |                | Default Timestamp momento registro | Timestamp do momento que o registro foi atualizado                  |

## Comandos

Iniciar servidor:

```shell
yarn start ou npm start
```

Iniciar modo desenvolvimento (auto reset ao salvar), obs: comando não compila TS

```shell
yarn dev ou npm run dev
```

Iniciar compilação com auto reset do TypeScript

```shell
yarn watch ou npm run watch
```

Compilar TypeScript

```shell
yarn build ou npm run build
```

Inciar servidor com auto reset e auto compilação

```shell
yarn dev:watch ou npm run dev:watch
```

Última versão do banco de dados

```shell
yarn migrate:latest ou npm run migrate:latest
```

Versão base do banco de dados

```shell
yarn migrate:rollback ou npm run migrate:rollback
```

Popular banco de dados

```shell
yarn seed:run ou npm run seed:run
```

Resetar o banco de dados

```shell
yarn db:reset ou npm run db:reset
```
