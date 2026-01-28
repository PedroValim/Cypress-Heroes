describe('Login - Cypress Heroes', () => {

    beforeEach(() => {
        cy.visit('/')
    })

    it('Deve realizar login com usuário válido', () => {
        cy.get('[data-cy=username]').type('admin')
        cy.get('[data-cy=password]').type('admin')
        cy.get('[data-cy=login-button]').click()

        cy.url().should('include', '/heroes')
        cy.contains('Heroes').should('be.visible')
    })

    it('Deve exibir mensagem de erro ao tentar login com usuário inválido', () => {
        cy.get('[data-cy=username]').type('usuario_invalido')
        cy.get('[data-cy=password]').type('senha_invalida')
        cy.get('[data-cy=login-button]').click()

        cy.contains('Invalid credentials').should('be.visible')
    })

})