/// <reference types="cypress"/>
import enderecoPage from '../support/page-objects/endereco.page';
//const dadosEndereco = require('../fixtures/endereco.json')
const dadosEndereco = require('../fixtures/endereco2.json')

describe('Funcionalidade Endereços - Faturamento e Entrega', () => {
    beforeEach(()=>{
        cy.visit('Minha conta') // vai acessar a página de login
        cy.fixture('perfil').then(dados =>{
            cy.login(dados.usuario, dados.senha)
        })
        
    });

    it('Deve fazer cadastro de faturamento com sucesso', () => {
        enderecoPage.editarenderecoFaturamento('Simone', 'Santos', 'Google', 'Carajas', '15', 'Itapevi', 'São Paulo', '06656350', '11973571191', 'wirus1@gmail.com')
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso') //assert
    });

    it('Deve fazer cadastro de faturamento com sucesso - usando array', () => {
        enderecoPage.editarenderecoFaturamento(
            dadosEndereco[0].nome,
            dadosEndereco[0].sobrenome,
            dadosEndereco[0].empresa,
            dadosEndereco[0].pais,
            dadosEndereco[0].endereco,
            dadosEndereco[0].cidade,
            dadosEndereco[0].estado,
            dadosEndereco[0].cep,
            dadosEndereco[0].telefone,
            dadosEndereco[0].email

            )//vai pegar os dados do array 0
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso') //assert
    });

    it('Deve fazer cadastro de entrega com sucesso - usando arquivo de dados', () => {
        enderecoPage.editarEnderecoEntrega('Valter', 'Rodrigues', 'Google','Rua Portela', '61','Barueri', 'São Paulo', '06666666')
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso' )// assert
    });

    it.only('Deve fazer cadastro de entrega com sucesso - usando um array', () => {
        enderecoPage.editarEnderecoEntrega(
            dadosEndereco[0].nome,
            dadosEndereco[0].sobrenome,
            dadosEndereco[0].empresa,
            dadosEndereco[0].pais,
            dadosEndereco[0].endereco,
            dadosEndereco[0].cidade,
            dadosEndereco[0].estado,
            dadosEndereco[0].cep
            )
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso' )// assert
    });

});