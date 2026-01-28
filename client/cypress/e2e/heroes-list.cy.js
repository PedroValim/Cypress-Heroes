describe('Listagem de Heróis - Cypress Heroes', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.get('[data-cy=username]').type('admin')
        cy.get('[data-cy=password]').type('admin')
        cy.get('[data-cy=login-button]').click()
    })

    it('Deve exibir a listagem de heróis após login', () => {
        cy.url().should('include', '/heroes')
        cy.get('[data-cy=heroes-list]').should('be.visible')
        cy.get('[data-cy=hero-card]')
            .should('have.length.greaterThan', 0)
    })

})