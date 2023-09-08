
///<reference types="Cypress" />

//type
it('type', ()=>{
    cy.visit('https://next.privat24.ua/mobile?lang=en')
        .get('[data-qa-node="phone-number"]')
        .type(112233344)
})

//focus
it('focus', ()=>{
    cy.visit('https://next.privat24.ua/mobile?lang=en')
        .get('[data-qa-node="amount"]')
        .focus()
})

it('blur', ()=>{
    cy.visit('https://next.privat24.ua/mobile?lang=en')
        .get('[data-qa-node="amount"]')
        .focus()
        .blur()
})

it('clear', ()=>{
    cy.visit('https://next.privat24.ua/mobile?lang=en')
        .get('[data-qa-node="amount"]')
        .type(999)
        .wait(2000)
        .clear()
})

it('submit', ()=>{
    cy.visit('https://next.privat24.ua/mobile?lang=en')
        .get('form[method="post"]')
        .submit()
})

it('click', ()=>{
    cy.visit('https://next.privat24.ua/mobile?lang=en')
        .get('[data-qa-value="manual"]')
        .click()
})

it('rightclick', ()=>{
    cy.visit('https://next.privat24.ua/mobile?lang=en')
        .get('[data-qa-value="manual"]')
        .rightclick()
})

// this test doesn't work
// it('doubleclick', ()=>{
//     cy.visit('https://developer.mozilla.org/en-US/docs/Web/API/element/dblclick_event')
//         .contains('My Card')
//         .dblclick()
// })

it('check', ()=>{
    cy.visit('https://www.facebook.com/reg/?')
        .contains('Повернутися на головну сторінку')
        .click()
        .get('[data-testid="open-registration-form-button"]')
        .click()
        .get('input[value="2"]')
        .wait(2000)
        .check()
})

it('uncheck', ()=>{
    cy.visit('https://en.privatbank.ua/')
        .get('#switch-input')
        .check({force: true})
        .wait(2000)
        .uncheck({force: true})
})

it('select', ()=>{
    cy.visit('https://www.facebook.com/reg/?')
        .contains('Повернутися на головну сторінку')
        .click()
        .get('[data-testid="open-registration-form-button"]')
        .click()
        .get('#month')
        .select('фев')
        .get('#day')
        .select('12')
        .get('#year')
        .select('1991')
})

it('scrollIntoView', ()=>{
    cy.visit('https://next.privat24.ua/mobile?lang=en')
        .get('[data-qa-value="English"]')
        .scrollIntoView()
})

it('scrollTo', ()=>{
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    cy.scrollTo(0, 500)
})

// this test doesn't work
// it.only('trigger', ()=>{
//     cy.visit('https://next.privat24.ua/?lang=en')
//         // .contains('Deposits')
//         .get('[data-qa-node="menu"]')
//         .trigger('mouseover')
// })