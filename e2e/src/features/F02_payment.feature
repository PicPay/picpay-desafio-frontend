#language: pt

Funcionalidade: Pagamento

    Cenário: Validar campos de pagamento
        Dado que eu esteja visualizando o formulário de 'Pagamento para'
        Quando devo clicar no botão 'Pagar'
        Então devo visualizar os retorno de validação 'Este campo é obrigatório'

    Cenário: Efetuar pagamento com sucesso
        Dado que eu esteja visualizando o formulário de 'Pagamento para'
        Quando devo digitar um valor com '10000'
        Quando devo clicar em Selecione um cartão
        Quando devo selecionar '1111111111111111'
        Quando devo clicar no botão 'Pagar'
        Quando devo visualizar o retorno de 'Recibo de pagamento'
        E devo visualizar a mensagem de retorno 'O pagamento foi concluido com sucesso.'
        Então devo fechar o modal com o botão 'Ok'

    Cenário: Efetuar pagamento com sucesso
        Dado que eu esteja visualizando o formulário de 'Pagamento para'
        Quando devo digitar um valor com '20000'
        Quando devo clicar em Selecione um cartão
        Quando devo selecionar '4111111111111234'
        Quando devo clicar no botão 'Pagar'
        Quando devo visualizar o retorno de 'Recibo de pagamento'
        E devo visualizar a mensagem de retorno 'O pagamento não foi concluido com sucesso.'
        Então devo fechar o modal com o botão 'Ok'