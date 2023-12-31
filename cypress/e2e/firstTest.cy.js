
///<reference types="Cypress" />

// it('SHOULD', ()=> {
//     cy.visit('https://next.privat24.ua/mobile?lang=en')
//     cy.get('[data-qa-node="amount"]').clear()
//         .type(100)
//         .should('have.value', 100)
//         .and('be.visible')
// })

// it('EXPECT', ()=> {
//     cy.visit('https://next.privat24.ua/mobile?lang=en')
//     cy.get('[data-qa-node="amount"]').clear()
//         .type(100).then(input=> {
//             expect(input).to.have.value(100)
//         })
// })

// it('Check Default value for Deposits', ()=> {
//     cy.visit('https://next.privat24.ua/deposit/open?lang=en')
//     cy.get('[data-qa-value="UAH"]')
//         .should('be.checked')
// })

// it('Check USD Not Checked', ()=> {
//     cy.visit('https://next.privat24.ua/deposit/open?lang=en')
//     cy.get('[data-qa-value="US Dollar"]')
//         .should('not.be.checked')
// })

// it('Check Is Visible Archive Link', ()=> {
//     cy.visit('https://next.privat24.ua/deposit/open?lang=en')
//     cy.contains('My deposits')
//         .trigger('mouseover')
//         .get('#archiveDeposits')
//         .should('be.visible')
// })

// it('Check Is Correct attr in button', ()=> {
//     cy.visit('https://next.privat24.ua?lang=en')
//     cy.contains('Show cards')
//         .should('have.attr', 'type')
//         .and('match', /button/)
// })

it.only('Check Is Correct attr in button', ()=> {
    cy.visit('https://next.privat24.ua?lang=en')
    cy.url()
        .should('eq', 'https://next.privat24.ua/?lang=en')
})

// test 9
