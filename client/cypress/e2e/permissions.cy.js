describe('Controle de Permissões (UI)', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('[data-cy=username]').type('user')
    cy.get('[data-cy=password]').type('user123')
    cy.get('[data-cy=login]').click()
    cy.url().should('include', '/heroes')
  })

  it('Não deve exibir ações restritas para usuário sem permissão', () => {
    cy.get('[data-cy=create-hero]').should('not.exist')

    cy.get('[data-cy=heroes-list]').should('exist')

    cy.get('[data-cy=hero-card]').first().click()

    cy.get('[data-cy=edit-hero]').should('not.exist')
    cy.get('[data-cy=delete-hero]').should('not.exist')
  })
})