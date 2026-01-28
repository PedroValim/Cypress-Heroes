describe('Criar novo herói - Cypress Heroes', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.get('[data-cy=username]').type('admin')
        cy.get('[data-cy=password]').type('admin')
        cy.get('[data-cy=login-button]').click()

        cy.url().should('include', '/heroes')
    })

    it('Deve criar um novo herói com sucesso', () => {
        const heroName = `Hero Cypress ${Date.now()}`
        cy.get('[data-cy=create-hero]').click()
        cy.get('[data-cy=hero-name]').type(heroName)
        cy.get('[data-cy=hero-power]').type('Automação')
        cy.get('[data-cy=save-hero]').click()
        cy.url().should('include', '/heroes')
        cy.contains(heroName).should('be.visible')
    })

    it('deve editar um herói com sucesso', () => {
        cy.get('[data-cy=hero-card]').first().click()
        cy.get('[data-cy=edit-hero]').click()

        cy.get('[data-cy=hero-name]')
            .clear()
            .type('Herói Editado')

        cy.get('[data-cy=save-hero]').click()

        cy.contains('Herói Editado').should('exist')
    })

    it('deve excluir um herói com sucesso', () => {
        cy.get('[data-cy=hero-card]').first().as('hero')

        cy.get('@hero').find('[data-cy=delete-hero]').click()

        // se tiver confirmação
        cy.get('[data-cy=confirm-delete]').click()

        // valida que não existe mais
        cy.get('@hero').should('not.exist')
    })

})