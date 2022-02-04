Cypress.Commands.add('login', () => {
    cy.visit('/')
    cy.get('#email').type(Cypress.env('localUser').email,{log: false})
    cy.get('#password').type(Cypress.env('localUser').password,{log: false})
    cy.get('.ant-btn-primary > span').click()
    cy.url().should('be.equal', 'https://d2wz1zybng84bi.cloudfront.net/home')
})