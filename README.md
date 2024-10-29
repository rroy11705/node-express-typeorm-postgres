# Express.js, typeorm with postgres boilerplate
[<img height="70" alt="bmc-button" src="https://user-images.githubusercontent.com/30167802/128463422-7872c236-95a4-437f-8c9e-d008ab415b8f.png">](https://buymeacoffee.com/developrr)
## Getting started

```
npm install
npm run dev
```

Using yarn

```
yarn
yarn run dev
```

### Using docker

```
npm run docker:build
npm run docker:start
```

> Note: All script has two versions `*:win` in `package.json` is for windows devices. Please change the script according to your platforms supported script. Enhance scripts PR welcome.

---

## Features

- [Express](https://expressjs.com/) framework
- [TypeScript](https://www.typescriptlang.org/) v4 codebase
- [TypeORM](https://typeorm.io/#/) using Data Mapper pattern
- Docker environment:
  - Easily start local development using Docker Compose with single command

```
npm run docker:build
npm run docker:start
```

- Set local, stage or production environmental variables with type definitions
- Logging with morgan
- Unit and integration tests with [Mocha](https://mochajs.org/), [Chai](https://www.chaijs.com/) and [supertest](https://github.com/visionmedia/supertest)
- Linting with [ESLint](https://eslint.org/)
- Prettier code formatter
- Git hooks with [Husky](https://typicode.github.io/husky/#/) and lint-staged
- Common custom Error handling with 404 route
- Standard customize error code
- Upload files using [multer](https://www.npmjs.com/package/multer)
- [Cloudinary](https://cloudinary.com/) api integrated
- Route parameters validation check before navigating to route

---

## Simple Folder structure

```
📦type-express
 ┣ 📂src
 ┃ ┣ 📦common
 ┃ ┃ ┗ 📂errorValidation // custom error handler
 ┃ ┃ ┃ ┣ 📂errors
 ┃ ┃ ┃ ┃ ┣ 📜bad-request-error.ts
 ┃ ┃ ┃ ┃ ┣ 📜custom-error.ts
 ┃ ┃ ┃ ┃ ┣ 📜database-connection-error.ts
 ┃ ┃ ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┃ ┃ ┣ 📜not-authorized-error.ts
 ┃ ┃ ┃ ┃ ┣ 📜not-found-error.ts
 ┃ ┃ ┃ ┃ ┗ 📜request-validation-error.ts
 ┃ ┃ ┃ ┗ 📜error.ts
 ┃ ┣ 📂controller  // data quering and business logics
 ┃ ┃ ┗ 📜UserController.ts
 ┃ ┣ 📂entity // Typeorm Schemas
 ┃ ┃ ┗ 📜User.ts
 ┃ ┣ 📂interface // Typescript interfaces
 ┃ ┃ ┗ 📜User.ts
 ┃ ┣ 📂migration // auto generated migration files
 ┃ ┃ ┗ 1730223962717-m1.ts
 ┃ ┣ 📂routes  // routes for each apis
 ┃ ┃ ┣ 📂users
 ┃ ┃ ┃ ┗ 📜index.ts
 ┃ ┃ ┗ 📜index.ts   // all imported routes from several subfolders
 ┃ ┣ data-source.ts // typeorm initialization code
 ┃ ┣ 📜index.ts
 ┃ ┗ 📜server.ts // express server initialization code
 ┣ 📂test // test file using mocha, chai and supertest
 ┃ ┗ 📜User.test.ts
 ┣ 📜.env // for environment variables
 ┣ 📜.eslintrc.json
 ┣ 📜.gitignore
 ┣ 📜.mocharc.json
 ┣ 📜.prettierignore
 ┣ 📜.prettierrc.json
 ┣ 📜docker-compose.yml
 ┣ 📜Dockerfile
 ┣ 📜LICENSE
 ┣ 📜ormconfig.docker.json
 ┣ 📜ormconfig.json //multiple connection demonstration
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┣ 📜README.md
 ┗ 📜tsconfig.json
```

---

## migration

To generate migration file run the following
```
npm run migration:generate src/migration/<migration_name>
```

To run migration files if it is not done automatically run the following
```
npm run migration:run
```

To run revert last migration run the following
```
npm run migration:run
```

An important note here, the file is NOT deleted, so you should manually delete that latest migration. So if you like to revert more than one migration, just run the command for reverting, delete the file, and repeat as many times as you like.

To drop the database tables run the following:
```
npm run migration:drop
```
