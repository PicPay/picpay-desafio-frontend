# Desafio Front-end PicPay
#
> Primeiramente eu gostaria de agradecer pela oportunidade!

## Setup do projeto
#
- Angular CLI: ~8.3.18
- Node: ~8.9.4
- Angular: ~8.2.13

## Plugins utilizados
#
- Material
- ngx-currency
- ngx-mask


## Como Rodar?
#
### Instalar as dependências
```sh
$ npm i 
```

### Rodar localmente
```sh
$ ng serve
```

### Testes e2e
```sh
$ ng e2e
```

### Testes unitários
```sh
$ ng test
```

## Objetivo
#
O objetivo é construir uma aplicação que simula o envio de dinheiro para uma outra pessoa, via cartão de crédito.

## Fluxo das telas
#
Na primeira tela terá uma listagem de usuários, onde a pessoa pode clicar em algum usuário da lista para realizar o pagamento. Quando clicado em um usuário é então aberto um modal de pagamento, contendo as informações do usuário de destino, a opção de selecionar um cartão de crédito e um botão de pagar. O usuário deve então digitar o valor, escolher o cartão e clicar em pagar. Para realização do pagamento deve-se chamar um endpoint de pagamento que aprovará/recusará a transação. E então deve-se mostrar na tela o modal de pagamento concluído com sucesso ou o de erro.

## Protótipo Inicial
#
> Você pode acessar o link do protótipo inicial no [Figma][PlDb] e navegar entre as páginas com as setas do teclado

## Transação
#
### Endpoint: https://run.mocky.io/v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989

### Método: POST

```typescript
// Payload:

interface TransactionPayload {
  // Card Info
  card_number: string;
  cvv: number;
  expiry_date: string;

  // Destination User ID
  destination_user_id: number;

  // Value of the Transaction
  value: number;
}
```

_Obs: Por se tratar de um mock o endpoint sempre retornará o mesmo payload, sucesso no pagamento, independente do cartão_

## Usuários
#
### Endpoint: https://www.mocky.io/v2/5d531c4f2e0000620081ddce

### Método: GET

```typescript
// Payload:

interface User {
  id: number;
  name: string;
  img: string;
  username: string;
}
```

## Diferenciais
#
- Teste unitário / E2E
- Melhoria no estilo da aplicação
- Validação de formulários e máscaras
- Organização do código

[PlDb]: <https://www.figma.com/proto/0UWD1GiH8nR5VNcmIRfNMQ/PicPay-Test?node-id=1%3A2&viewport=585%2C322%2C0.23150619864463806&scaling=min-zoom>
