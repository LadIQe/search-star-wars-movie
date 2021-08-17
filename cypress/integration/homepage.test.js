describe('Test HP with search functionality', () => {
  it('loads a page', () => {
    cy.visit('/')
    cy.contains('Find your movie')
    cy.get('#search-input').should('be.empty')
    cy.get('.ant-list-empty-text')
    cy.get('.pagination').should('be.empty')
  })

  it('enters search string', () => {
    cy.get('#search-input').clear().type('star{enter}')
    cy.get('.ant-list-empty-text').should('not.exist')
    cy.get('.pagination').should('not.be.empty')
  })

  it('clears search string', () => {
    cy.get('.ant-list-empty-text').should('not.exist')
    cy.get('.pagination').should('not.be.empty')

    cy.get('#search-input').clear().type('{enter}')
    cy.get('.ant-list-empty-text').should('exist')
    cy.get('.pagination').should('be.empty')
  })

  it('goes to movie detail and back to HP', () => {
    cy.get('#search-input').clear().type('star{enter}')
    cy.get('.ant-list-item-meta-title a').first().click()
    cy.url().should('include', '/movie/')

    cy.get('[data-menu-id*="search"]').click()
    cy.url().should('include', '/')
    cy.get('.ant-list-empty-text').should('exist')
    cy.get('.pagination').should('be.empty')
  })
})
