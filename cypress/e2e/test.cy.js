// Lecture from 22:44 - 32:50

///<reference types="Cypress" />

import Login from "../../integration/PageObject/login";

const email = "anton.khytryk@gmail.com"
const correctPass = "Password321"
const incorrectPass = "Incorrect"

describe("Assertion", function(){

    const login = new Login()

    it('loginPositiveCase', () => {
        
        login.settings()

        login.btnLogin()
        .should('be.visible')
        .click()

        login.email()
        .type(email)
        .should('have.value', email)

        login.password()
        .type(correctPass)
        .should('have.value', correctPass)

        login.clickBtnLogin()
        .should('be.visible')
        .click()
    });

    it('loginIncorrectPass', () => {

        login.settings()

        login.btnLogin()
        .should('be.visible')
        .click()

        login.email()
        .type(email)
        .should('have.value', email)

       login.password()
        .type(incorrectPass)
        .should('have.value', incorrectPass)

        login.clickBtnLogin()
        .should('be.visible')
        .click()

        cy.contains('Invalid email or password.')
        .should('be.visible')
    });

    it('loginIncorrectEmail', () => {
        
        login.settings()

        login.btnLogin()
        .should('be.visible')
        .click()

        login.email()
        .type(email)
        .should('have.value', email)

        login.password()
        .type(incorrectPass)
        .should('have.value', incorrectPass)

        login.clickBtnLogin()
        .should('be.visible')
        .click()

        cy.contains('Invalid email or password.')
        .should('be.visible')
    });
})