# Desafio Front-end PicPay - Simulação de pagamento

## Stacks

- `Angular CLI: 8.3.29`
- `Node: 10.15.3`
- `OS: win32 x64`
- `Angular: 8.2.14`
- `Angular Material: ^8.2.3` to components
- `Flex Layout: ^8.0.0-beta.27` to grid layout

## Conventional Libs

- `git-commit-msg-linter` to standardize commit messages
- `config global git alias` to simplify git commands

## Setup

Run `npm i` for install all dependencies.

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`.

## Unit tests

Run `npm run test`.

## Structure

1. `src/app/core`
  - The folder where has services, domains, api urls, anything that can be shared to another project;
  - This folder contains what makes this project work.

2. `src/app/shared`
  - The folder where has services, components, constants, anything that can be shared in this project.

3. `app.component.*`
  - I decided to put the user list and transaction modal in app.component.* Because the project is small.

4. `src/assets/styles`
 - This folder contains scss config 
 
5. `src/assets/i18n/*`
 - This folder contains the project vocabulary jsons

7. `src/app/core/languages/contexts/*`
 - This folder contains the context interface referring to vocabularies jsons

8. `styles.scss`
  - The global styles
