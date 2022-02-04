const { faker } = require('@faker-js/faker');
Cypress.Commands.add('produtos', () => {

    let dimesion = `${faker.datatype.number({'min':0,'max':100})}x${faker.datatype.number({'min':0,'max':100})}x${faker.datatype.number({'min':0,'max':100})}`
    
    // dados iniciais
    cy.visit('https://d2wz1zybng84bi.cloudfront.net/products')
    cy.get('[data-testid="list-create-button"] > :nth-child(2)').click()
    cy.get('#name').type(faker.commerce.productName())
    cy.get('#sku').type(faker.datatype.uuid())
    cy.get('#price').type(faker.commerce.price())
    cy.get('#supply').type(faker.datatype.number({'min':20, 'max':100}))
    cy.get('#supply_location').type(faker.address.streetName())
    cy.get('#cost_price').type(faker.commerce.price())
    cy.get(':nth-child(1) > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input').check()
    cy.get(':nth-child(2) > .ant-btn > span').click()

    //Descrição
    cy.get('#title').type(faker.name.title())
    cy.get(':nth-child(3) > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .react-mde > :nth-child(2) > .mde-textarea-wrapper > [data-testid="text-area"]').type(faker.lorem.paragraphs())
    cy.get('.ant-form-item-control-input-content > .ant-btn > span').click()
    cy.get('#topics_0').type(faker.name.findName())
    cy.get('#SEO_title').type(faker.name.findName())
    cy.get('#SEO_keywords').type(faker.name.findName())
    cy.get(':nth-child(10) > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .react-mde > :nth-child(2) > .mde-textarea-wrapper > [data-testid="text-area"]').type(faker.lorem.paragraphs())
    cy.get(':nth-child(3) > .ant-btn > span').click()

    //upload de arquivo
    cy.wait(1000)
    cy.get('input[type="file"]').attachFile('/images/Teste.png')
    cy.wait(1000)
    cy.get(':nth-child(3) > .ant-btn > span').click()
    

    //Detatlhes
    cy.get('#brand').type(faker.company.companyName())
    cy.get('#weight').type(faker.datatype.number())
    cy.get('#color').type(faker.commerce.color())
    cy.get('#material').type(faker.commerce.productMaterial())
    cy.get('#size').type('G')
    cy.get('#dimensions').type(dimesion)
    cy.get('.ant-btn > :nth-child(2)').click()

    //Confirmação da criação do arquivo
    cy.get('.ant-notification-notice-message').should('have.text', 'Sucesso')
})